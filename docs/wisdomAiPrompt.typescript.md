# `wisdomAiPrompt` Submodule <a name="`wisdomAiPrompt` Submodule" id="@cdktn/provider-awscc.wisdomAiPrompt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomAiPrompt <a name="WisdomAiPrompt" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt awscc_wisdom_ai_prompt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer"></a>

```typescript
import { wisdomAiPrompt } from '@cdktn/provider-awscc'

new wisdomAiPrompt.WisdomAiPrompt(scope: Construct, id: string, config: WisdomAiPromptConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig">WisdomAiPromptConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig">WisdomAiPromptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.putTemplateConfiguration">putTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetAssistantId">resetAssistantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTemplateConfiguration` <a name="putTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.putTemplateConfiguration"></a>

```typescript
public putTemplateConfiguration(value: WisdomAiPromptTemplateConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.putTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

---

##### `resetAssistantId` <a name="resetAssistantId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetAssistantId"></a>

```typescript
public resetAssistantId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomAiPrompt resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isConstruct"></a>

```typescript
import { wisdomAiPrompt } from '@cdktn/provider-awscc'

wisdomAiPrompt.WisdomAiPrompt.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformElement"></a>

```typescript
import { wisdomAiPrompt } from '@cdktn/provider-awscc'

wisdomAiPrompt.WisdomAiPrompt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformResource"></a>

```typescript
import { wisdomAiPrompt } from '@cdktn/provider-awscc'

wisdomAiPrompt.WisdomAiPrompt.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport"></a>

```typescript
import { wisdomAiPrompt } from '@cdktn/provider-awscc'

wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WisdomAiPrompt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WisdomAiPrompt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WisdomAiPrompt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomAiPrompt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptArn">aiPromptArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptId">aiPromptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantArn">assistantArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modifiedTimeSeconds">modifiedTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormatInput">apiFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantIdInput">assistantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelIdInput">modelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfigurationInput">templateConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateTypeInput">templateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormat">apiFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantId">assistantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelId">modelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateType">templateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aiPromptArn`<sup>Required</sup> <a name="aiPromptArn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptArn"></a>

```typescript
public readonly aiPromptArn: string;
```

- *Type:* string

---

##### `aiPromptId`<sup>Required</sup> <a name="aiPromptId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.aiPromptId"></a>

```typescript
public readonly aiPromptId: string;
```

- *Type:* string

---

##### `assistantArn`<sup>Required</sup> <a name="assistantArn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantArn"></a>

```typescript
public readonly assistantArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedTimeSeconds`<sup>Required</sup> <a name="modifiedTimeSeconds" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modifiedTimeSeconds"></a>

```typescript
public readonly modifiedTimeSeconds: number;
```

- *Type:* number

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfiguration"></a>

```typescript
public readonly templateConfiguration: WisdomAiPromptTemplateConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationOutputReference</a>

---

##### `apiFormatInput`<sup>Optional</sup> <a name="apiFormatInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormatInput"></a>

```typescript
public readonly apiFormatInput: string;
```

- *Type:* string

---

##### `assistantIdInput`<sup>Optional</sup> <a name="assistantIdInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantIdInput"></a>

```typescript
public readonly assistantIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelIdInput"></a>

```typescript
public readonly modelIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateConfigurationInput`<sup>Optional</sup> <a name="templateConfigurationInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateConfigurationInput"></a>

```typescript
public readonly templateConfigurationInput: IResolvable | WisdomAiPromptTemplateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

---

##### `templateTypeInput`<sup>Optional</sup> <a name="templateTypeInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateTypeInput"></a>

```typescript
public readonly templateTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `apiFormat`<sup>Required</sup> <a name="apiFormat" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.apiFormat"></a>

```typescript
public readonly apiFormat: string;
```

- *Type:* string

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.templateType"></a>

```typescript
public readonly templateType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPrompt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomAiPromptConfig <a name="WisdomAiPromptConfig" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.Initializer"></a>

```typescript
import { wisdomAiPrompt } from '@cdktn/provider-awscc'

const wisdomAiPromptConfig: wisdomAiPrompt.WisdomAiPromptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.apiFormat">apiFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#api_format WisdomAiPrompt#api_format}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.modelId">modelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#model_id WisdomAiPrompt#model_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_configuration WisdomAiPrompt#template_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateType">templateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_type WisdomAiPrompt#template_type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#type WisdomAiPrompt#type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.assistantId">assistantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#assistant_id WisdomAiPrompt#assistant_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#description WisdomAiPrompt#description}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#name WisdomAiPrompt#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#tags WisdomAiPrompt#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiFormat`<sup>Required</sup> <a name="apiFormat" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.apiFormat"></a>

```typescript
public readonly apiFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#api_format WisdomAiPrompt#api_format}.

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.modelId"></a>

```typescript
public readonly modelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#model_id WisdomAiPrompt#model_id}.

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateConfiguration"></a>

```typescript
public readonly templateConfiguration: WisdomAiPromptTemplateConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_configuration WisdomAiPrompt#template_configuration}.

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.templateType"></a>

```typescript
public readonly templateType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#template_type WisdomAiPrompt#template_type}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#type WisdomAiPrompt#type}.

---

##### `assistantId`<sup>Optional</sup> <a name="assistantId" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#assistant_id WisdomAiPrompt#assistant_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#description WisdomAiPrompt#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#name WisdomAiPrompt#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#tags WisdomAiPrompt#tags}.

---

### WisdomAiPromptTemplateConfiguration <a name="WisdomAiPromptTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration.Initializer"></a>

```typescript
import { wisdomAiPrompt } from '@cdktn/provider-awscc'

const wisdomAiPromptTemplateConfiguration: wisdomAiPrompt.WisdomAiPromptTemplateConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration.property.textFullAiPromptEditTemplateConfiguration">textFullAiPromptEditTemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#text_full_ai_prompt_edit_template_configuration WisdomAiPrompt#text_full_ai_prompt_edit_template_configuration}. |

---

##### `textFullAiPromptEditTemplateConfiguration`<sup>Optional</sup> <a name="textFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration.property.textFullAiPromptEditTemplateConfiguration"></a>

```typescript
public readonly textFullAiPromptEditTemplateConfiguration: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#text_full_ai_prompt_edit_template_configuration WisdomAiPrompt#text_full_ai_prompt_edit_template_configuration}.

---

### WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration <a name="WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration.Initializer"></a>

```typescript
import { wisdomAiPrompt } from '@cdktn/provider-awscc'

const wisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration: wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#text WisdomAiPrompt#text}. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wisdom_ai_prompt#text WisdomAiPrompt#text}.

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomAiPromptTemplateConfigurationOutputReference <a name="WisdomAiPromptTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer"></a>

```typescript
import { wisdomAiPrompt } from '@cdktn/provider-awscc'

new wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.putTextFullAiPromptEditTemplateConfiguration">putTextFullAiPromptEditTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resetTextFullAiPromptEditTemplateConfiguration">resetTextFullAiPromptEditTemplateConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTextFullAiPromptEditTemplateConfiguration` <a name="putTextFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.putTextFullAiPromptEditTemplateConfiguration"></a>

```typescript
public putTextFullAiPromptEditTemplateConfiguration(value: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.putTextFullAiPromptEditTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

---

##### `resetTextFullAiPromptEditTemplateConfiguration` <a name="resetTextFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.resetTextFullAiPromptEditTemplateConfiguration"></a>

```typescript
public resetTextFullAiPromptEditTemplateConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfiguration">textFullAiPromptEditTemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfigurationInput">textFullAiPromptEditTemplateConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `textFullAiPromptEditTemplateConfiguration`<sup>Required</sup> <a name="textFullAiPromptEditTemplateConfiguration" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfiguration"></a>

```typescript
public readonly textFullAiPromptEditTemplateConfiguration: WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference</a>

---

##### `textFullAiPromptEditTemplateConfigurationInput`<sup>Optional</sup> <a name="textFullAiPromptEditTemplateConfigurationInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.textFullAiPromptEditTemplateConfigurationInput"></a>

```typescript
public readonly textFullAiPromptEditTemplateConfigurationInput: IResolvable | WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomAiPromptTemplateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfiguration">WisdomAiPromptTemplateConfiguration</a>

---


### WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference <a name="WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer"></a>

```typescript
import { wisdomAiPrompt } from '@cdktn/provider-awscc'

new wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomAiPrompt.WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration">WisdomAiPromptTemplateConfigurationTextFullAiPromptEditTemplateConfiguration</a>

---



