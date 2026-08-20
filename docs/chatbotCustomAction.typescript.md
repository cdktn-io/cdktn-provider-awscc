# `chatbotCustomAction` Submodule <a name="`chatbotCustomAction` Submodule" id="@cdktn/provider-awscc.chatbotCustomAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotCustomAction <a name="ChatbotCustomAction" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action awscc_chatbot_custom_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

new chatbotCustomAction.ChatbotCustomAction(scope: Construct, id: string, config: ChatbotCustomActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig">ChatbotCustomActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig">ChatbotCustomActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putAttachments">putAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetAliasName">resetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetAttachments">resetAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttachments` <a name="putAttachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putAttachments"></a>

```typescript
public putAttachments(value: IResolvable | ChatbotCustomActionAttachments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putAttachments.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>[]

---

##### `putDefinition` <a name="putDefinition" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putDefinition"></a>

```typescript
public putDefinition(value: ChatbotCustomActionDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putTags"></a>

```typescript
public putTags(value: IResolvable | ChatbotCustomActionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>[]

---

##### `resetAliasName` <a name="resetAliasName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetAliasName"></a>

```typescript
public resetAliasName(): void
```

##### `resetAttachments` <a name="resetAttachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetAttachments"></a>

```typescript
public resetAttachments(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChatbotCustomAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isConstruct"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

chatbotCustomAction.ChatbotCustomAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformElement"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

chatbotCustomAction.ChatbotCustomAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformResource"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

chatbotCustomAction.ChatbotCustomAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

chatbotCustomAction.ChatbotCustomAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChatbotCustomAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChatbotCustomAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChatbotCustomAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChatbotCustomAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.attachments">attachments</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList">ChatbotCustomActionAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.customActionArn">customActionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference">ChatbotCustomActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList">ChatbotCustomActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.actionNameInput">actionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.aliasNameInput">aliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.attachmentsInput">attachmentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.definitionInput">definitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.aliasName">aliasName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.attachments"></a>

```typescript
public readonly attachments: ChatbotCustomActionAttachmentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList">ChatbotCustomActionAttachmentsList</a>

---

##### `customActionArn`<sup>Required</sup> <a name="customActionArn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.customActionArn"></a>

```typescript
public readonly customActionArn: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.definition"></a>

```typescript
public readonly definition: ChatbotCustomActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference">ChatbotCustomActionDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tags"></a>

```typescript
public readonly tags: ChatbotCustomActionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList">ChatbotCustomActionTagsList</a>

---

##### `actionNameInput`<sup>Optional</sup> <a name="actionNameInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.actionNameInput"></a>

```typescript
public readonly actionNameInput: string;
```

- *Type:* string

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.aliasNameInput"></a>

```typescript
public readonly aliasNameInput: string;
```

- *Type:* string

---

##### `attachmentsInput`<sup>Optional</sup> <a name="attachmentsInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.attachmentsInput"></a>

```typescript
public readonly attachmentsInput: IResolvable | ChatbotCustomActionAttachments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>[]

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.definitionInput"></a>

```typescript
public readonly definitionInput: IResolvable | ChatbotCustomActionDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ChatbotCustomActionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>[]

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotCustomActionAttachments <a name="ChatbotCustomActionAttachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

const chatbotCustomActionAttachments: chatbotCustomAction.ChatbotCustomActionAttachments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.buttonText">buttonText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#button_text ChatbotCustomAction#button_text}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.criteria">criteria</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#criteria ChatbotCustomAction#criteria}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.notificationType">notificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#notification_type ChatbotCustomAction#notification_type}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#variables ChatbotCustomAction#variables}. |

---

##### `buttonText`<sup>Optional</sup> <a name="buttonText" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.buttonText"></a>

```typescript
public readonly buttonText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#button_text ChatbotCustomAction#button_text}.

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.criteria"></a>

```typescript
public readonly criteria: IResolvable | ChatbotCustomActionAttachmentsCriteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#criteria ChatbotCustomAction#criteria}.

---

##### `notificationType`<sup>Optional</sup> <a name="notificationType" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#notification_type ChatbotCustomAction#notification_type}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#variables ChatbotCustomAction#variables}.

---

### ChatbotCustomActionAttachmentsCriteria <a name="ChatbotCustomActionAttachmentsCriteria" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

const chatbotCustomActionAttachmentsCriteria: chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#operator ChatbotCustomAction#operator}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#value ChatbotCustomAction#value}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.variableName">variableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#variable_name ChatbotCustomAction#variable_name}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#operator ChatbotCustomAction#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#value ChatbotCustomAction#value}.

---

##### `variableName`<sup>Optional</sup> <a name="variableName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria.property.variableName"></a>

```typescript
public readonly variableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#variable_name ChatbotCustomAction#variable_name}.

---

### ChatbotCustomActionConfig <a name="ChatbotCustomActionConfig" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

const chatbotCustomActionConfig: chatbotCustomAction.ChatbotCustomActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.actionName">actionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#action_name ChatbotCustomAction#action_name}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#definition ChatbotCustomAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.aliasName">aliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#alias_name ChatbotCustomAction#alias_name}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.attachments">attachments</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#attachments ChatbotCustomAction#attachments}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#tags ChatbotCustomAction#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#action_name ChatbotCustomAction#action_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.definition"></a>

```typescript
public readonly definition: ChatbotCustomActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#definition ChatbotCustomAction#definition}.

---

##### `aliasName`<sup>Optional</sup> <a name="aliasName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#alias_name ChatbotCustomAction#alias_name}.

---

##### `attachments`<sup>Optional</sup> <a name="attachments" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.attachments"></a>

```typescript
public readonly attachments: IResolvable | ChatbotCustomActionAttachments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#attachments ChatbotCustomAction#attachments}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ChatbotCustomActionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#tags ChatbotCustomAction#tags}.

---

### ChatbotCustomActionDefinition <a name="ChatbotCustomActionDefinition" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

const chatbotCustomActionDefinition: chatbotCustomAction.ChatbotCustomActionDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition.property.commandText">commandText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#command_text ChatbotCustomAction#command_text}. |

---

##### `commandText`<sup>Required</sup> <a name="commandText" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition.property.commandText"></a>

```typescript
public readonly commandText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#command_text ChatbotCustomAction#command_text}.

---

### ChatbotCustomActionTags <a name="ChatbotCustomActionTags" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

const chatbotCustomActionTags: chatbotCustomAction.ChatbotCustomActionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#key ChatbotCustomAction#key}. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#value ChatbotCustomAction#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#key ChatbotCustomAction#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chatbot_custom_action#value ChatbotCustomAction#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotCustomActionAttachmentsCriteriaList <a name="ChatbotCustomActionAttachmentsCriteriaList" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

new chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.get"></a>

```typescript
public get(index: number): ChatbotCustomActionAttachmentsCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotCustomActionAttachmentsCriteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>[]

---


### ChatbotCustomActionAttachmentsCriteriaOutputReference <a name="ChatbotCustomActionAttachmentsCriteriaOutputReference" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

new chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetVariableName">resetVariableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetVariableName` <a name="resetVariableName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.resetVariableName"></a>

```typescript
public resetVariableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.variableNameInput">variableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.variableName">variableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `variableNameInput`<sup>Optional</sup> <a name="variableNameInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.variableNameInput"></a>

```typescript
public readonly variableNameInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variableName`<sup>Required</sup> <a name="variableName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.variableName"></a>

```typescript
public readonly variableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotCustomActionAttachmentsCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>

---


### ChatbotCustomActionAttachmentsList <a name="ChatbotCustomActionAttachmentsList" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

new chatbotCustomAction.ChatbotCustomActionAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.get"></a>

```typescript
public get(index: number): ChatbotCustomActionAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotCustomActionAttachments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>[]

---


### ChatbotCustomActionAttachmentsOutputReference <a name="ChatbotCustomActionAttachmentsOutputReference" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

new chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetButtonText">resetButtonText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetNotificationType">resetNotificationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.putCriteria"></a>

```typescript
public putCriteria(value: IResolvable | ChatbotCustomActionAttachmentsCriteria[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.putCriteria.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>[]

---

##### `resetButtonText` <a name="resetButtonText" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetButtonText"></a>

```typescript
public resetButtonText(): void
```

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetCriteria"></a>

```typescript
public resetCriteria(): void
```

##### `resetNotificationType` <a name="resetNotificationType" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetNotificationType"></a>

```typescript
public resetNotificationType(): void
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.resetVariables"></a>

```typescript
public resetVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList">ChatbotCustomActionAttachmentsCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.buttonTextInput">buttonTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.criteriaInput">criteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.notificationTypeInput">notificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.variablesInput">variablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.buttonText">buttonText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.criteria"></a>

```typescript
public readonly criteria: ChatbotCustomActionAttachmentsCriteriaList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteriaList">ChatbotCustomActionAttachmentsCriteriaList</a>

---

##### `buttonTextInput`<sup>Optional</sup> <a name="buttonTextInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.buttonTextInput"></a>

```typescript
public readonly buttonTextInput: string;
```

- *Type:* string

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: IResolvable | ChatbotCustomActionAttachmentsCriteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsCriteria">ChatbotCustomActionAttachmentsCriteria</a>[]

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.notificationTypeInput"></a>

```typescript
public readonly notificationTypeInput: string;
```

- *Type:* string

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.variablesInput"></a>

```typescript
public readonly variablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `buttonText`<sup>Required</sup> <a name="buttonText" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.buttonText"></a>

```typescript
public readonly buttonText: string;
```

- *Type:* string

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotCustomActionAttachments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionAttachments">ChatbotCustomActionAttachments</a>

---


### ChatbotCustomActionDefinitionOutputReference <a name="ChatbotCustomActionDefinitionOutputReference" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

new chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.commandTextInput">commandTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.commandText">commandText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandTextInput`<sup>Optional</sup> <a name="commandTextInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.commandTextInput"></a>

```typescript
public readonly commandTextInput: string;
```

- *Type:* string

---

##### `commandText`<sup>Required</sup> <a name="commandText" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.commandText"></a>

```typescript
public readonly commandText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotCustomActionDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionDefinition">ChatbotCustomActionDefinition</a>

---


### ChatbotCustomActionTagsList <a name="ChatbotCustomActionTagsList" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

new chatbotCustomAction.ChatbotCustomActionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.get"></a>

```typescript
public get(index: number): ChatbotCustomActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotCustomActionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>[]

---


### ChatbotCustomActionTagsOutputReference <a name="ChatbotCustomActionTagsOutputReference" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer"></a>

```typescript
import { chatbotCustomAction } from '@cdktn/provider-awscc'

new chatbotCustomAction.ChatbotCustomActionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChatbotCustomActionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chatbotCustomAction.ChatbotCustomActionTags">ChatbotCustomActionTags</a>

---



