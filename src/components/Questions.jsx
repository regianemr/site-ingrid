import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function Questions() {
  return (
    <section id="faq" className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Perguntas Frequentes</h2>
      </div>
      <Accordion collapseAll>
        <AccordionPanel>
          <AccordionTitle>Como funciona o curso?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo mauris, fringilla a elit nec, ultrices tincidunt nibh. Nam sit amet ante sodales, iaculis augue consequat, lobortis mi. Nunc condimentum, sapien id faucibus malesuada, dolor eros viverra ex, nec venenatis diam sem nec lorem. .
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              get started&nbsp;
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Como acessar o curso?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo mauris, fringilla a elit nec, ultrices tincidunt nibh. Nam sit amet ante sodales, iaculis augue consequat, lobortis mi. Nunc condimentum, sapien id faucibus malesuada, dolor eros viverra ex, nec venenatis diam sem nec lorem. Sed quis odio maximus arcu varius pellentesque ac eget velit. Proin consequat risus sed pulvinar posuere. Phasellus volutpat ornare purus, in convallis lacus convallis at. Sed mollis nisl vel viverra eleifend. Duis eu leo nec lorem volutpat ullamcorper quis vel velit. In placerat vel nulla a tristique. Ut vel ex non urna ultricies feugiat pretium a ligula.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Como funciona o Certificado de Conclusão Digital?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo mauris, fringilla a elit nec, ultrices tincidunt nibh. Nam sit amet ante sodales, iaculis augue consequat, lobortis mi. Nunc condimentum, sapien id faucibus malesuada, dolor eros viverra ex, nec venenatis diam sem nec lorem. Sed quis odio maximus arcu varius pellentesque ac eget velit. Proin consequat risus sed pulvinar posuere. Phasellus volutpat ornare purus, in convallis lacus convallis at. 
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Como comprar o curso?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo mauris, fringilla a elit nec, ultrices tincidunt nibh. Nam sit amet ante sodales, iaculis augue consequat, lobortis mi. Nunc condimentum, sapien id faucibus malesuada, dolor eros viverra ex, nec venenatis diam sem nec lorem. Sed quis odio maximus arcu varius pellentesque ac eget velit. Proin consequat risus sed pulvinar posuere. Phasellus volutpat ornare purus, in convallis lacus convallis at. Sed mollis nisl vel viverra eleifend. Duis eu leo nec lorem volutpat ullamcorper quis vel velit. In placerat vel nulla a tristique. Ut vel ex non urna ultricies feugiat pretium a ligula.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo mauris, fringilla a elit nec, ultrices tincidunt nibh. Nam sit amet ante sodales, iaculis augue consequat, lobortis mi. Nunc condimentum, sapien id faucibus malesuada, dolor eros viverra ex, nec venenatis diam sem nec lorem. 
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Posso parcelar o pagamento?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo mauris, fringilla a elit nec, ultrices tincidunt nibh. Nam sit amet ante sodales, iaculis augue consequat, lobortis mi. Nunc condimentum, sapien id faucibus malesuada, dolor eros viverra ex, nec venenatis diam sem nec lorem. Sed quis odio maximus arcu varius pellentesque ac eget velit. Proin consequat risus sed pulvinar posuere. Phasellus volutpat ornare purus, in convallis lacus convallis at. Sed mollis nisl vel viverra eleifend. Duis eu leo nec lorem volutpat ullamcorper quis vel velit. In placerat vel nulla a tristique. Ut vel ex non urna ultricies feugiat pretium a ligula.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo mauris, fringilla a elit nec, ultrices tincidunt nibh. Nam sit amet ante sodales, iaculis augue consequat, lobortis mi. Nunc condimentum, sapien id faucibus malesuada, dolor eros viverra ex, nec venenatis diam sem nec lorem. Sed quis odio maximus arcu varius pellentesque ac eget velit. Proin consequat risus sed pulvinar posuere. Phasellus volutpat ornare purus, in convallis lacus convallis at. 
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>Há suporte ou grupo de alunos?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo mauris, fringilla a elit nec, ultrices tincidunt nibh. Nam sit amet ante sodales, iaculis augue consequat, lobortis mi. Nunc condimentum, sapien id faucibus malesuada, dolor eros viverra ex, nec venenatis diam sem nec lorem. Sed quis odio maximus arcu varius pellentesque ac eget velit. Proin consequat risus sed pulvinar posuere. Phasellus volutpat ornare purus, in convallis lacus convallis at. Sed mollis nisl vel viverra eleifend. Duis eu leo nec lorem volutpat ullamcorper quis vel velit. In placerat vel nulla a tristique. Ut vel ex non urna ultricies feugiat pretium a ligula.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      
        
      </Accordion>

    </section>
  );
}
