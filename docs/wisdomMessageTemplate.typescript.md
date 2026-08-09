# `wisdomMessageTemplate` Submodule <a name="`wisdomMessageTemplate` Submodule" id="@cdktn/provider-awscc.wisdomMessageTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomMessageTemplate <a name="WisdomMessageTemplate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template awscc_wisdom_message_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplate(scope: Construct, id: string, config: WisdomMessageTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig">WisdomMessageTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig">WisdomMessageTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes">putDefaultAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration">putGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments">putMessageTemplateAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDefaultAttributes">resetDefaultAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetGroupingConfiguration">resetGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetMessageTemplateAttachments">resetMessageTemplateAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent"></a>

```typescript
public putContent(value: WisdomMessageTemplateContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

---

##### `putDefaultAttributes` <a name="putDefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes"></a>

```typescript
public putDefaultAttributes(value: WisdomMessageTemplateDefaultAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

---

##### `putGroupingConfiguration` <a name="putGroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration"></a>

```typescript
public putGroupingConfiguration(value: WisdomMessageTemplateGroupingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

---

##### `putMessageTemplateAttachments` <a name="putMessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments"></a>

```typescript
public putMessageTemplateAttachments(value: IResolvable | WisdomMessageTemplateMessageTemplateAttachments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | WisdomMessageTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]

---

##### `resetDefaultAttributes` <a name="resetDefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDefaultAttributes"></a>

```typescript
public resetDefaultAttributes(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGroupingConfiguration` <a name="resetGroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetGroupingConfiguration"></a>

```typescript
public resetGroupingConfiguration(): void
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetLanguage"></a>

```typescript
public resetLanguage(): void
```

##### `resetMessageTemplateAttachments` <a name="resetMessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetMessageTemplateAttachments"></a>

```typescript
public resetMessageTemplateAttachments(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomMessageTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

wisdomMessageTemplate.WisdomMessageTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WisdomMessageTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WisdomMessageTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WisdomMessageTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WisdomMessageTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference">WisdomMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributes">defaultAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference">WisdomMessageTemplateDefaultAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfiguration">groupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference">WisdomMessageTemplateGroupingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateArn">messageTemplateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachments">messageTemplateAttachments</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList">WisdomMessageTemplateMessageTemplateAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateContentSha256">messageTemplateContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateId">messageTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList">WisdomMessageTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtypeInput">channelSubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.contentInput">contentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributesInput">defaultAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfigurationInput">groupingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArnInput">knowledgeBaseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachmentsInput">messageTemplateAttachmentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtype">channelSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.content"></a>

```typescript
public readonly content: WisdomMessageTemplateContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference">WisdomMessageTemplateContentOutputReference</a>

---

##### `defaultAttributes`<sup>Required</sup> <a name="defaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributes"></a>

```typescript
public readonly defaultAttributes: WisdomMessageTemplateDefaultAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference">WisdomMessageTemplateDefaultAttributesOutputReference</a>

---

##### `groupingConfiguration`<sup>Required</sup> <a name="groupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfiguration"></a>

```typescript
public readonly groupingConfiguration: WisdomMessageTemplateGroupingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference">WisdomMessageTemplateGroupingConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `messageTemplateArn`<sup>Required</sup> <a name="messageTemplateArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateArn"></a>

```typescript
public readonly messageTemplateArn: string;
```

- *Type:* string

---

##### `messageTemplateAttachments`<sup>Required</sup> <a name="messageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachments"></a>

```typescript
public readonly messageTemplateAttachments: WisdomMessageTemplateMessageTemplateAttachmentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList">WisdomMessageTemplateMessageTemplateAttachmentsList</a>

---

##### `messageTemplateContentSha256`<sup>Required</sup> <a name="messageTemplateContentSha256" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateContentSha256"></a>

```typescript
public readonly messageTemplateContentSha256: string;
```

- *Type:* string

---

##### `messageTemplateId`<sup>Required</sup> <a name="messageTemplateId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateId"></a>

```typescript
public readonly messageTemplateId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tags"></a>

```typescript
public readonly tags: WisdomMessageTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList">WisdomMessageTemplateTagsList</a>

---

##### `channelSubtypeInput`<sup>Optional</sup> <a name="channelSubtypeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtypeInput"></a>

```typescript
public readonly channelSubtypeInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.contentInput"></a>

```typescript
public readonly contentInput: IResolvable | WisdomMessageTemplateContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

---

##### `defaultAttributesInput`<sup>Optional</sup> <a name="defaultAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributesInput"></a>

```typescript
public readonly defaultAttributesInput: IResolvable | WisdomMessageTemplateDefaultAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `groupingConfigurationInput`<sup>Optional</sup> <a name="groupingConfigurationInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfigurationInput"></a>

```typescript
public readonly groupingConfigurationInput: IResolvable | WisdomMessageTemplateGroupingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

---

##### `knowledgeBaseArnInput`<sup>Optional</sup> <a name="knowledgeBaseArnInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArnInput"></a>

```typescript
public readonly knowledgeBaseArnInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `messageTemplateAttachmentsInput`<sup>Optional</sup> <a name="messageTemplateAttachmentsInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachmentsInput"></a>

```typescript
public readonly messageTemplateAttachmentsInput: IResolvable | WisdomMessageTemplateMessageTemplateAttachments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | WisdomMessageTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]

---

##### `channelSubtype`<sup>Required</sup> <a name="channelSubtype" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtype"></a>

```typescript
public readonly channelSubtype: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomMessageTemplateConfig <a name="WisdomMessageTemplateConfig" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateConfig: wisdomMessageTemplate.WisdomMessageTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.channelSubtype">channelSubtype</a></code> | <code>string</code> | The channel subtype this message template applies to. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | The content of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.name">name</a></code> | <code>string</code> | The name of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.defaultAttributes">defaultAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | An object that specifies the default values to use for variables in the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.description">description</a></code> | <code>string</code> | The description of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.groupingConfiguration">groupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | The configuration information of the user groups that the message template is accessible to. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.language">language</a></code> | <code>string</code> | The language code value for the language in which the message template is written. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.messageTemplateAttachments">messageTemplateAttachments</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]</code> | List of message template attachments. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]</code> | The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelSubtype`<sup>Required</sup> <a name="channelSubtype" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.channelSubtype"></a>

```typescript
public readonly channelSubtype: string;
```

- *Type:* string

The channel subtype this message template applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#channel_subtype WisdomMessageTemplate#channel_subtype}

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.content"></a>

```typescript
public readonly content: WisdomMessageTemplateContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

The content of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.knowledgeBaseArn"></a>

```typescript
public readonly knowledgeBaseArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#knowledge_base_arn WisdomMessageTemplate#knowledge_base_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `defaultAttributes`<sup>Optional</sup> <a name="defaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.defaultAttributes"></a>

```typescript
public readonly defaultAttributes: WisdomMessageTemplateDefaultAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

An object that specifies the default values to use for variables in the message template.

This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#default_attributes WisdomMessageTemplate#default_attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#description WisdomMessageTemplate#description}

---

##### `groupingConfiguration`<sup>Optional</sup> <a name="groupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.groupingConfiguration"></a>

```typescript
public readonly groupingConfiguration: WisdomMessageTemplateGroupingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

The configuration information of the user groups that the message template is accessible to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#grouping_configuration WisdomMessageTemplate#grouping_configuration}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

The language code value for the language in which the message template is written.

The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#language WisdomMessageTemplate#language}

---

##### `messageTemplateAttachments`<sup>Optional</sup> <a name="messageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.messageTemplateAttachments"></a>

```typescript
public readonly messageTemplateAttachments: IResolvable | WisdomMessageTemplateMessageTemplateAttachments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]

List of message template attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#message_template_attachments WisdomMessageTemplate#message_template_attachments}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | WisdomMessageTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]

The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#tags WisdomMessageTemplate#tags}

---

### WisdomMessageTemplateContent <a name="WisdomMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateContent: wisdomMessageTemplate.WisdomMessageTemplateContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.emailMessageTemplateContent">emailMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | The content of message template that applies to email channel subtype. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.smsMessageTemplateContent">smsMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | The content of message template that applies to SMS channel subtype. |

---

##### `emailMessageTemplateContent`<sup>Optional</sup> <a name="emailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.emailMessageTemplateContent"></a>

```typescript
public readonly emailMessageTemplateContent: WisdomMessageTemplateContentEmailMessageTemplateContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

The content of message template that applies to email channel subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#email_message_template_content WisdomMessageTemplate#email_message_template_content}

---

##### `smsMessageTemplateContent`<sup>Optional</sup> <a name="smsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.smsMessageTemplateContent"></a>

```typescript
public readonly smsMessageTemplateContent: WisdomMessageTemplateContentSmsMessageTemplateContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

The content of message template that applies to SMS channel subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#sms_message_template_content WisdomMessageTemplate#sms_message_template_content}

---

### WisdomMessageTemplateContentEmailMessageTemplateContent <a name="WisdomMessageTemplateContentEmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateContentEmailMessageTemplateContent: wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.body">body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | The body to use in email messages. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.headers">headers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]</code> | The email headers to include in email messages. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.subject">subject</a></code> | <code>string</code> | The subject line, or title, to use in email messages. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.body"></a>

```typescript
public readonly body: WisdomMessageTemplateContentEmailMessageTemplateContentBody;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

The body to use in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#body WisdomMessageTemplate#body}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.headers"></a>

```typescript
public readonly headers: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]

The email headers to include in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#headers WisdomMessageTemplate#headers}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

The subject line, or title, to use in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#subject WisdomMessageTemplate#subject}

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBody <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateContentEmailMessageTemplateContentBody: wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.html">html</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | The message body, in HTML format, to use in email messages that are based on the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.plainText">plainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | The message body, in plain text format, to use in email messages that are based on the message template. |

---

##### `html`<sup>Optional</sup> <a name="html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.html"></a>

```typescript
public readonly html: WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

The message body, in HTML format, to use in email messages that are based on the message template.

We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#html WisdomMessageTemplate#html}

---

##### `plainText`<sup>Optional</sup> <a name="plainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.plainText"></a>

```typescript
public readonly plainText: WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

The message body, in plain text format, to use in email messages that are based on the message template.

We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#plain_text WisdomMessageTemplate#plain_text}

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml: wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText: wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateContentEmailMessageTemplateContentHeaders <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeaders" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateContentEmailMessageTemplateContentHeaders: wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.name">name</a></code> | <code>string</code> | The name of the email header. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.value">value</a></code> | <code>string</code> | The value of the email header. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the email header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the email header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#value WisdomMessageTemplate#value}

---

### WisdomMessageTemplateContentSmsMessageTemplateContent <a name="WisdomMessageTemplateContentSmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateContentSmsMessageTemplateContent: wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.property.body">body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | The body to use in SMS messages. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.property.body"></a>

```typescript
public readonly body: WisdomMessageTemplateContentSmsMessageTemplateContentBody;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

The body to use in SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#body WisdomMessageTemplate#body}

---

### WisdomMessageTemplateContentSmsMessageTemplateContentBody <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateContentSmsMessageTemplateContentBody: wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.property.plainText">plainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | The container of message template body. |

---

##### `plainText`<sup>Optional</sup> <a name="plainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.property.plainText"></a>

```typescript
public readonly plainText: WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

The container of message template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#plain_text WisdomMessageTemplate#plain_text}

---

### WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText: wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateDefaultAttributes <a name="WisdomMessageTemplateDefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateDefaultAttributes: wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.agentAttributes">agentAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | The agent attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | The custom attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customerProfileAttributes">customerProfileAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | The customer profile attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.systemAttributes">systemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | The system attributes that are used with the message template. |

---

##### `agentAttributes`<sup>Optional</sup> <a name="agentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.agentAttributes"></a>

```typescript
public readonly agentAttributes: WisdomMessageTemplateDefaultAttributesAgentAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

The agent attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#agent_attributes WisdomMessageTemplate#agent_attributes}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The custom attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#custom_attributes WisdomMessageTemplate#custom_attributes}

---

##### `customerProfileAttributes`<sup>Optional</sup> <a name="customerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customerProfileAttributes"></a>

```typescript
public readonly customerProfileAttributes: WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

The customer profile attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#customer_profile_attributes WisdomMessageTemplate#customer_profile_attributes}

---

##### `systemAttributes`<sup>Optional</sup> <a name="systemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.systemAttributes"></a>

```typescript
public readonly systemAttributes: WisdomMessageTemplateDefaultAttributesSystemAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

The system attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#system_attributes WisdomMessageTemplate#system_attributes}

---

### WisdomMessageTemplateDefaultAttributesAgentAttributes <a name="WisdomMessageTemplateDefaultAttributesAgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateDefaultAttributesAgentAttributes: wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.firstName">firstName</a></code> | <code>string</code> | The agent?s first name as entered in their Amazon Connect user account. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.lastName">lastName</a></code> | <code>string</code> | The agent?s last name as entered in their Amazon Connect user account. |

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

The agent?s first name as entered in their Amazon Connect user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#first_name WisdomMessageTemplate#first_name}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

The agent?s last name as entered in their Amazon Connect user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#last_name WisdomMessageTemplate#last_name}

---

### WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes <a name="WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateDefaultAttributesCustomerProfileAttributes: wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.accountNumber">accountNumber</a></code> | <code>string</code> | A unique account number that you have given to the customer. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.additionalInformation">additionalInformation</a></code> | <code>string</code> | Any additional information relevant to the customer's profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address1">address1</a></code> | <code>string</code> | The first line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address2">address2</a></code> | <code>string</code> | The second line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address3">address3</a></code> | <code>string</code> | The third line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address4">address4</a></code> | <code>string</code> | The fourth line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress1">billingAddress1</a></code> | <code>string</code> | The first line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress2">billingAddress2</a></code> | <code>string</code> | The second line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress3">billingAddress3</a></code> | <code>string</code> | The third line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress4">billingAddress4</a></code> | <code>string</code> | The fourth line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCity">billingCity</a></code> | <code>string</code> | The city of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCountry">billingCountry</a></code> | <code>string</code> | The country of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCounty">billingCounty</a></code> | <code>string</code> | The county of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingPostalCode">billingPostalCode</a></code> | <code>string</code> | The postal code of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingProvince">billingProvince</a></code> | <code>string</code> | The province of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingState">billingState</a></code> | <code>string</code> | The state of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.birthDate">birthDate</a></code> | <code>string</code> | The customer's birth date. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessEmailAddress">businessEmailAddress</a></code> | <code>string</code> | The customer's business email address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessName">businessName</a></code> | <code>string</code> | The name of the customer's business. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessPhoneNumber">businessPhoneNumber</a></code> | <code>string</code> | The customer's business phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.city">city</a></code> | <code>string</code> | The city in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.country">country</a></code> | <code>string</code> | The country in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.county">county</a></code> | <code>string</code> | The county in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.custom">custom</a></code> | <code>{[ key: string ]: string}</code> | The custom attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.emailAddress">emailAddress</a></code> | <code>string</code> | The customer's email address, which has not been specified as a personal or business address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.firstName">firstName</a></code> | <code>string</code> | The customer's first name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.gender">gender</a></code> | <code>string</code> | The customer's gender. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.homePhoneNumber">homePhoneNumber</a></code> | <code>string</code> | The customer's home phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.lastName">lastName</a></code> | <code>string</code> | The customer's last name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress1">mailingAddress1</a></code> | <code>string</code> | The first line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress2">mailingAddress2</a></code> | <code>string</code> | The second line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress3">mailingAddress3</a></code> | <code>string</code> | The third line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress4">mailingAddress4</a></code> | <code>string</code> | The fourth line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCity">mailingCity</a></code> | <code>string</code> | The city of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCountry">mailingCountry</a></code> | <code>string</code> | The country of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCounty">mailingCounty</a></code> | <code>string</code> | The county of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingPostalCode">mailingPostalCode</a></code> | <code>string</code> | The postal code of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingProvince">mailingProvince</a></code> | <code>string</code> | The province of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingState">mailingState</a></code> | <code>string</code> | The state of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.middleName">middleName</a></code> | <code>string</code> | The customer's middle name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mobilePhoneNumber">mobilePhoneNumber</a></code> | <code>string</code> | The customer's mobile phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.partyType">partyType</a></code> | <code>string</code> | The customer's party type. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | The customer's phone number, which has not been specified as a mobile, home, or business number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.postalCode">postalCode</a></code> | <code>string</code> | The postal code of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileArn">profileArn</a></code> | <code>string</code> | The ARN of a customer profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileId">profileId</a></code> | <code>string</code> | The unique identifier of a customer profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.province">province</a></code> | <code>string</code> | The province in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress1">shippingAddress1</a></code> | <code>string</code> | The first line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress2">shippingAddress2</a></code> | <code>string</code> | The second line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress3">shippingAddress3</a></code> | <code>string</code> | The third line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress4">shippingAddress4</a></code> | <code>string</code> | The fourth line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCity">shippingCity</a></code> | <code>string</code> | The city of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCountry">shippingCountry</a></code> | <code>string</code> | The country of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCounty">shippingCounty</a></code> | <code>string</code> | The county of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingPostalCode">shippingPostalCode</a></code> | <code>string</code> | The postal code of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingProvince">shippingProvince</a></code> | <code>string</code> | The province of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingState">shippingState</a></code> | <code>string</code> | The state of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.state">state</a></code> | <code>string</code> | The state in which a customer lives. |

---

##### `accountNumber`<sup>Optional</sup> <a name="accountNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.accountNumber"></a>

```typescript
public readonly accountNumber: string;
```

- *Type:* string

A unique account number that you have given to the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#account_number WisdomMessageTemplate#account_number}

---

##### `additionalInformation`<sup>Optional</sup> <a name="additionalInformation" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.additionalInformation"></a>

```typescript
public readonly additionalInformation: string;
```

- *Type:* string

Any additional information relevant to the customer's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#additional_information WisdomMessageTemplate#additional_information}

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

The first line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#address_1 WisdomMessageTemplate#address_1}

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

The second line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#address_2 WisdomMessageTemplate#address_2}

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address3"></a>

```typescript
public readonly address3: string;
```

- *Type:* string

The third line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#address_3 WisdomMessageTemplate#address_3}

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address4"></a>

```typescript
public readonly address4: string;
```

- *Type:* string

The fourth line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#address_4 WisdomMessageTemplate#address_4}

---

##### `billingAddress1`<sup>Optional</sup> <a name="billingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress1"></a>

```typescript
public readonly billingAddress1: string;
```

- *Type:* string

The first line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#billing_address_1 WisdomMessageTemplate#billing_address_1}

---

##### `billingAddress2`<sup>Optional</sup> <a name="billingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress2"></a>

```typescript
public readonly billingAddress2: string;
```

- *Type:* string

The second line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#billing_address_2 WisdomMessageTemplate#billing_address_2}

---

##### `billingAddress3`<sup>Optional</sup> <a name="billingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress3"></a>

```typescript
public readonly billingAddress3: string;
```

- *Type:* string

The third line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#billing_address_3 WisdomMessageTemplate#billing_address_3}

---

##### `billingAddress4`<sup>Optional</sup> <a name="billingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress4"></a>

```typescript
public readonly billingAddress4: string;
```

- *Type:* string

The fourth line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#billing_address_4 WisdomMessageTemplate#billing_address_4}

---

##### `billingCity`<sup>Optional</sup> <a name="billingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCity"></a>

```typescript
public readonly billingCity: string;
```

- *Type:* string

The city of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#billing_city WisdomMessageTemplate#billing_city}

---

##### `billingCountry`<sup>Optional</sup> <a name="billingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCountry"></a>

```typescript
public readonly billingCountry: string;
```

- *Type:* string

The country of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#billing_country WisdomMessageTemplate#billing_country}

---

##### `billingCounty`<sup>Optional</sup> <a name="billingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCounty"></a>

```typescript
public readonly billingCounty: string;
```

- *Type:* string

The county of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#billing_county WisdomMessageTemplate#billing_county}

---

##### `billingPostalCode`<sup>Optional</sup> <a name="billingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingPostalCode"></a>

```typescript
public readonly billingPostalCode: string;
```

- *Type:* string

The postal code of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#billing_postal_code WisdomMessageTemplate#billing_postal_code}

---

##### `billingProvince`<sup>Optional</sup> <a name="billingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingProvince"></a>

```typescript
public readonly billingProvince: string;
```

- *Type:* string

The province of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#billing_province WisdomMessageTemplate#billing_province}

---

##### `billingState`<sup>Optional</sup> <a name="billingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingState"></a>

```typescript
public readonly billingState: string;
```

- *Type:* string

The state of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#billing_state WisdomMessageTemplate#billing_state}

---

##### `birthDate`<sup>Optional</sup> <a name="birthDate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.birthDate"></a>

```typescript
public readonly birthDate: string;
```

- *Type:* string

The customer's birth date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#birth_date WisdomMessageTemplate#birth_date}

---

##### `businessEmailAddress`<sup>Optional</sup> <a name="businessEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessEmailAddress"></a>

```typescript
public readonly businessEmailAddress: string;
```

- *Type:* string

The customer's business email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#business_email_address WisdomMessageTemplate#business_email_address}

---

##### `businessName`<sup>Optional</sup> <a name="businessName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessName"></a>

```typescript
public readonly businessName: string;
```

- *Type:* string

The name of the customer's business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#business_name WisdomMessageTemplate#business_name}

---

##### `businessPhoneNumber`<sup>Optional</sup> <a name="businessPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessPhoneNumber"></a>

```typescript
public readonly businessPhoneNumber: string;
```

- *Type:* string

The customer's business phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#business_phone_number WisdomMessageTemplate#business_phone_number}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

The city in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#city WisdomMessageTemplate#city}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

The country in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#country WisdomMessageTemplate#country}

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

The county in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#county WisdomMessageTemplate#county}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.custom"></a>

```typescript
public readonly custom: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The custom attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#custom WisdomMessageTemplate#custom}

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

The customer's email address, which has not been specified as a personal or business address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#email_address WisdomMessageTemplate#email_address}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

The customer's first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#first_name WisdomMessageTemplate#first_name}

---

##### `gender`<sup>Optional</sup> <a name="gender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.gender"></a>

```typescript
public readonly gender: string;
```

- *Type:* string

The customer's gender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#gender WisdomMessageTemplate#gender}

---

##### `homePhoneNumber`<sup>Optional</sup> <a name="homePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.homePhoneNumber"></a>

```typescript
public readonly homePhoneNumber: string;
```

- *Type:* string

The customer's home phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#home_phone_number WisdomMessageTemplate#home_phone_number}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

The customer's last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#last_name WisdomMessageTemplate#last_name}

---

##### `mailingAddress1`<sup>Optional</sup> <a name="mailingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress1"></a>

```typescript
public readonly mailingAddress1: string;
```

- *Type:* string

The first line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mailing_address_1 WisdomMessageTemplate#mailing_address_1}

---

##### `mailingAddress2`<sup>Optional</sup> <a name="mailingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress2"></a>

```typescript
public readonly mailingAddress2: string;
```

- *Type:* string

The second line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mailing_address_2 WisdomMessageTemplate#mailing_address_2}

---

##### `mailingAddress3`<sup>Optional</sup> <a name="mailingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress3"></a>

```typescript
public readonly mailingAddress3: string;
```

- *Type:* string

The third line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mailing_address_3 WisdomMessageTemplate#mailing_address_3}

---

##### `mailingAddress4`<sup>Optional</sup> <a name="mailingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress4"></a>

```typescript
public readonly mailingAddress4: string;
```

- *Type:* string

The fourth line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mailing_address_4 WisdomMessageTemplate#mailing_address_4}

---

##### `mailingCity`<sup>Optional</sup> <a name="mailingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCity"></a>

```typescript
public readonly mailingCity: string;
```

- *Type:* string

The city of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mailing_city WisdomMessageTemplate#mailing_city}

---

##### `mailingCountry`<sup>Optional</sup> <a name="mailingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCountry"></a>

```typescript
public readonly mailingCountry: string;
```

- *Type:* string

The country of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mailing_country WisdomMessageTemplate#mailing_country}

---

##### `mailingCounty`<sup>Optional</sup> <a name="mailingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCounty"></a>

```typescript
public readonly mailingCounty: string;
```

- *Type:* string

The county of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mailing_county WisdomMessageTemplate#mailing_county}

---

##### `mailingPostalCode`<sup>Optional</sup> <a name="mailingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingPostalCode"></a>

```typescript
public readonly mailingPostalCode: string;
```

- *Type:* string

The postal code of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mailing_postal_code WisdomMessageTemplate#mailing_postal_code}

---

##### `mailingProvince`<sup>Optional</sup> <a name="mailingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingProvince"></a>

```typescript
public readonly mailingProvince: string;
```

- *Type:* string

The province of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mailing_province WisdomMessageTemplate#mailing_province}

---

##### `mailingState`<sup>Optional</sup> <a name="mailingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingState"></a>

```typescript
public readonly mailingState: string;
```

- *Type:* string

The state of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mailing_state WisdomMessageTemplate#mailing_state}

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

The customer's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#middle_name WisdomMessageTemplate#middle_name}

---

##### `mobilePhoneNumber`<sup>Optional</sup> <a name="mobilePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mobilePhoneNumber"></a>

```typescript
public readonly mobilePhoneNumber: string;
```

- *Type:* string

The customer's mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#mobile_phone_number WisdomMessageTemplate#mobile_phone_number}

---

##### `partyType`<sup>Optional</sup> <a name="partyType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.partyType"></a>

```typescript
public readonly partyType: string;
```

- *Type:* string

The customer's party type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#party_type WisdomMessageTemplate#party_type}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

The customer's phone number, which has not been specified as a mobile, home, or business number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#phone_number WisdomMessageTemplate#phone_number}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

The postal code of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#postal_code WisdomMessageTemplate#postal_code}

---

##### `profileArn`<sup>Optional</sup> <a name="profileArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileArn"></a>

```typescript
public readonly profileArn: string;
```

- *Type:* string

The ARN of a customer profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#profile_arn WisdomMessageTemplate#profile_arn}

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The unique identifier of a customer profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#profile_id WisdomMessageTemplate#profile_id}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

The province in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#province WisdomMessageTemplate#province}

---

##### `shippingAddress1`<sup>Optional</sup> <a name="shippingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress1"></a>

```typescript
public readonly shippingAddress1: string;
```

- *Type:* string

The first line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#shipping_address_1 WisdomMessageTemplate#shipping_address_1}

---

##### `shippingAddress2`<sup>Optional</sup> <a name="shippingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress2"></a>

```typescript
public readonly shippingAddress2: string;
```

- *Type:* string

The second line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#shipping_address_2 WisdomMessageTemplate#shipping_address_2}

---

##### `shippingAddress3`<sup>Optional</sup> <a name="shippingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress3"></a>

```typescript
public readonly shippingAddress3: string;
```

- *Type:* string

The third line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#shipping_address_3 WisdomMessageTemplate#shipping_address_3}

---

##### `shippingAddress4`<sup>Optional</sup> <a name="shippingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress4"></a>

```typescript
public readonly shippingAddress4: string;
```

- *Type:* string

The fourth line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#shipping_address_4 WisdomMessageTemplate#shipping_address_4}

---

##### `shippingCity`<sup>Optional</sup> <a name="shippingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCity"></a>

```typescript
public readonly shippingCity: string;
```

- *Type:* string

The city of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#shipping_city WisdomMessageTemplate#shipping_city}

---

##### `shippingCountry`<sup>Optional</sup> <a name="shippingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCountry"></a>

```typescript
public readonly shippingCountry: string;
```

- *Type:* string

The country of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#shipping_country WisdomMessageTemplate#shipping_country}

---

##### `shippingCounty`<sup>Optional</sup> <a name="shippingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCounty"></a>

```typescript
public readonly shippingCounty: string;
```

- *Type:* string

The county of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#shipping_county WisdomMessageTemplate#shipping_county}

---

##### `shippingPostalCode`<sup>Optional</sup> <a name="shippingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingPostalCode"></a>

```typescript
public readonly shippingPostalCode: string;
```

- *Type:* string

The postal code of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#shipping_postal_code WisdomMessageTemplate#shipping_postal_code}

---

##### `shippingProvince`<sup>Optional</sup> <a name="shippingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingProvince"></a>

```typescript
public readonly shippingProvince: string;
```

- *Type:* string

The province of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#shipping_province WisdomMessageTemplate#shipping_province}

---

##### `shippingState`<sup>Optional</sup> <a name="shippingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingState"></a>

```typescript
public readonly shippingState: string;
```

- *Type:* string

The state of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#shipping_state WisdomMessageTemplate#shipping_state}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The state in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#state WisdomMessageTemplate#state}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributes <a name="WisdomMessageTemplateDefaultAttributesSystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateDefaultAttributesSystemAttributes: wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.customerEndpoint">customerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | The CustomerEndpoint attribute. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.name">name</a></code> | <code>string</code> | The name of the task. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.systemEndpoint">systemEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | The SystemEndpoint attribute. |

---

##### `customerEndpoint`<sup>Optional</sup> <a name="customerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.customerEndpoint"></a>

```typescript
public readonly customerEndpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

The CustomerEndpoint attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#customer_endpoint WisdomMessageTemplate#customer_endpoint}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `systemEndpoint`<sup>Optional</sup> <a name="systemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.systemEndpoint"></a>

```typescript
public readonly systemEndpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

The SystemEndpoint attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#system_endpoint WisdomMessageTemplate#system_endpoint}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint: wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.property.address">address</a></code> | <code>string</code> | The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#address WisdomMessageTemplate#address}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint: wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.property.address">address</a></code> | <code>string</code> | The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#address WisdomMessageTemplate#address}

---

### WisdomMessageTemplateGroupingConfiguration <a name="WisdomMessageTemplateGroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateGroupingConfiguration: wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.criteria">criteria</a></code> | <code>string</code> | The criteria used for grouping Amazon Q in Connect users. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.values">values</a></code> | <code>string[]</code> | The list of values that define different groups of Amazon Q in Connect users. |

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.criteria"></a>

```typescript
public readonly criteria: string;
```

- *Type:* string

The criteria used for grouping Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#criteria WisdomMessageTemplate#criteria}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The list of values that define different groups of Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#values WisdomMessageTemplate#values}

---

### WisdomMessageTemplateMessageTemplateAttachments <a name="WisdomMessageTemplateMessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateMessageTemplateAttachments: wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentId">attachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#attachment_id WisdomMessageTemplate#attachment_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentName">attachmentName</a></code> | <code>string</code> | The name of the attachment file being uploaded. The name should include the file extension. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.s3PresignedUrl">s3PresignedUrl</a></code> | <code>string</code> | The S3 Presigned URL for the attachment file. |

---

##### `attachmentId`<sup>Optional</sup> <a name="attachmentId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#attachment_id WisdomMessageTemplate#attachment_id}.

---

##### `attachmentName`<sup>Optional</sup> <a name="attachmentName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentName"></a>

```typescript
public readonly attachmentName: string;
```

- *Type:* string

The name of the attachment file being uploaded. The name should include the file extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#attachment_name WisdomMessageTemplate#attachment_name}

---

##### `s3PresignedUrl`<sup>Optional</sup> <a name="s3PresignedUrl" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.s3PresignedUrl"></a>

```typescript
public readonly s3PresignedUrl: string;
```

- *Type:* string

The S3 Presigned URL for the attachment file.

When generating the PreSignedUrl, please ensure that the expires-in time is set to 30 minutes. The URL can be generated through the AWS Console or through the AWS CLI (https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html). 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#s3_presigned_url WisdomMessageTemplate#s3_presigned_url}

---

### WisdomMessageTemplateTags <a name="WisdomMessageTemplateTags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

const wisdomMessageTemplateTags: wisdomMessageTemplate.WisdomMessageTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#key WisdomMessageTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wisdom_message_template#value WisdomMessageTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml">putHtml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText">putPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetHtml">resetHtml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetPlainText">resetPlainText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHtml` <a name="putHtml" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml"></a>

```typescript
public putHtml(value: WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

---

##### `putPlainText` <a name="putPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText"></a>

```typescript
public putPlainText(value: WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

---

##### `resetHtml` <a name="resetHtml" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetHtml"></a>

```typescript
public resetHtml(): void
```

##### `resetPlainText` <a name="resetPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetPlainText"></a>

```typescript
public resetPlainText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.html">html</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainText">plainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.htmlInput">htmlInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainTextInput">plainTextInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.html"></a>

```typescript
public readonly html: WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference</a>

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainText"></a>

```typescript
public readonly plainText: WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference</a>

---

##### `htmlInput`<sup>Optional</sup> <a name="htmlInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.htmlInput"></a>

```typescript
public readonly htmlInput: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

---

##### `plainTextInput`<sup>Optional</sup> <a name="plainTextInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainTextInput"></a>

```typescript
public readonly plainTextInput: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBody;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get"></a>

```typescript
public get(index: number): WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]

---


### WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentHeaders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>

---


### WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetSubject">resetSubject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBody` <a name="putBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody"></a>

```typescript
public putBody(value: WisdomMessageTemplateContentEmailMessageTemplateContentBody): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

---

##### `putHeaders` <a name="putHeaders" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]

---

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.body">body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList">WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.bodyInput">bodyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headersInput">headersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.body"></a>

```typescript
public readonly body: WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference</a>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headers"></a>

```typescript
public readonly headers: WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList">WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentBody;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContentHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders">WisdomMessageTemplateContentEmailMessageTemplateContentHeaders</a>[]

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

---


### WisdomMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent">putEmailMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent">putSmsMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetEmailMessageTemplateContent">resetEmailMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetSmsMessageTemplateContent">resetSmsMessageTemplateContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmailMessageTemplateContent` <a name="putEmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent"></a>

```typescript
public putEmailMessageTemplateContent(value: WisdomMessageTemplateContentEmailMessageTemplateContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

---

##### `putSmsMessageTemplateContent` <a name="putSmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent"></a>

```typescript
public putSmsMessageTemplateContent(value: WisdomMessageTemplateContentSmsMessageTemplateContent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

---

##### `resetEmailMessageTemplateContent` <a name="resetEmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetEmailMessageTemplateContent"></a>

```typescript
public resetEmailMessageTemplateContent(): void
```

##### `resetSmsMessageTemplateContent` <a name="resetSmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetSmsMessageTemplateContent"></a>

```typescript
public resetSmsMessageTemplateContent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContent">emailMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContent">smsMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContentInput">emailMessageTemplateContentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContentInput">smsMessageTemplateContentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailMessageTemplateContent`<sup>Required</sup> <a name="emailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContent"></a>

```typescript
public readonly emailMessageTemplateContent: WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference</a>

---

##### `smsMessageTemplateContent`<sup>Required</sup> <a name="smsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContent"></a>

```typescript
public readonly smsMessageTemplateContent: WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference</a>

---

##### `emailMessageTemplateContentInput`<sup>Optional</sup> <a name="emailMessageTemplateContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContentInput"></a>

```typescript
public readonly emailMessageTemplateContentInput: IResolvable | WisdomMessageTemplateContentEmailMessageTemplateContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

---

##### `smsMessageTemplateContentInput`<sup>Optional</sup> <a name="smsMessageTemplateContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContentInput"></a>

```typescript
public readonly smsMessageTemplateContentInput: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

---


### WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText">putPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resetPlainText">resetPlainText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPlainText` <a name="putPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText"></a>

```typescript
public putPlainText(value: WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

---

##### `resetPlainText` <a name="resetPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resetPlainText"></a>

```typescript
public resetPlainText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainText">plainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainTextInput">plainTextInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainText"></a>

```typescript
public readonly plainText: WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference</a>

---

##### `plainTextInput`<sup>Optional</sup> <a name="plainTextInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainTextInput"></a>

```typescript
public readonly plainTextInput: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContentBody;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

---


### WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

---


### WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resetBody">resetBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBody` <a name="putBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody"></a>

```typescript
public putBody(value: WisdomMessageTemplateContentSmsMessageTemplateContentBody): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

---

##### `resetBody` <a name="resetBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.body">body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.bodyInput">bodyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.body"></a>

```typescript
public readonly body: WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContentBody;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateContentSmsMessageTemplateContent;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

---


### WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetLastName">resetLastName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFirstName` <a name="resetFirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateDefaultAttributesAgentAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAccountNumber">resetAccountNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAdditionalInformation">resetAdditionalInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress1">resetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress2">resetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress3">resetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress4">resetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress1">resetBillingAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress2">resetBillingAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress3">resetBillingAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress4">resetBillingAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCity">resetBillingCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCountry">resetBillingCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCounty">resetBillingCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingPostalCode">resetBillingPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingProvince">resetBillingProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingState">resetBillingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBirthDate">resetBirthDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessEmailAddress">resetBusinessEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessName">resetBusinessName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessPhoneNumber">resetBusinessPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetGender">resetGender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetHomePhoneNumber">resetHomePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress1">resetMailingAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress2">resetMailingAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress3">resetMailingAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress4">resetMailingAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCity">resetMailingCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCountry">resetMailingCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCounty">resetMailingCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingPostalCode">resetMailingPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingProvince">resetMailingProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingState">resetMailingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMiddleName">resetMiddleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMobilePhoneNumber">resetMobilePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPartyType">resetPartyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileArn">resetProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress1">resetShippingAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress2">resetShippingAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress3">resetShippingAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress4">resetShippingAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCity">resetShippingCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCountry">resetShippingCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCounty">resetShippingCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingPostalCode">resetShippingPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingProvince">resetShippingProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingState">resetShippingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountNumber` <a name="resetAccountNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAccountNumber"></a>

```typescript
public resetAccountNumber(): void
```

##### `resetAdditionalInformation` <a name="resetAdditionalInformation" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAdditionalInformation"></a>

```typescript
public resetAdditionalInformation(): void
```

##### `resetAddress1` <a name="resetAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress1"></a>

```typescript
public resetAddress1(): void
```

##### `resetAddress2` <a name="resetAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress2"></a>

```typescript
public resetAddress2(): void
```

##### `resetAddress3` <a name="resetAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress3"></a>

```typescript
public resetAddress3(): void
```

##### `resetAddress4` <a name="resetAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress4"></a>

```typescript
public resetAddress4(): void
```

##### `resetBillingAddress1` <a name="resetBillingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress1"></a>

```typescript
public resetBillingAddress1(): void
```

##### `resetBillingAddress2` <a name="resetBillingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress2"></a>

```typescript
public resetBillingAddress2(): void
```

##### `resetBillingAddress3` <a name="resetBillingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress3"></a>

```typescript
public resetBillingAddress3(): void
```

##### `resetBillingAddress4` <a name="resetBillingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress4"></a>

```typescript
public resetBillingAddress4(): void
```

##### `resetBillingCity` <a name="resetBillingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCity"></a>

```typescript
public resetBillingCity(): void
```

##### `resetBillingCountry` <a name="resetBillingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCountry"></a>

```typescript
public resetBillingCountry(): void
```

##### `resetBillingCounty` <a name="resetBillingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCounty"></a>

```typescript
public resetBillingCounty(): void
```

##### `resetBillingPostalCode` <a name="resetBillingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingPostalCode"></a>

```typescript
public resetBillingPostalCode(): void
```

##### `resetBillingProvince` <a name="resetBillingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingProvince"></a>

```typescript
public resetBillingProvince(): void
```

##### `resetBillingState` <a name="resetBillingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingState"></a>

```typescript
public resetBillingState(): void
```

##### `resetBirthDate` <a name="resetBirthDate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBirthDate"></a>

```typescript
public resetBirthDate(): void
```

##### `resetBusinessEmailAddress` <a name="resetBusinessEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessEmailAddress"></a>

```typescript
public resetBusinessEmailAddress(): void
```

##### `resetBusinessName` <a name="resetBusinessName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessName"></a>

```typescript
public resetBusinessName(): void
```

##### `resetBusinessPhoneNumber` <a name="resetBusinessPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessPhoneNumber"></a>

```typescript
public resetBusinessPhoneNumber(): void
```

##### `resetCity` <a name="resetCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCounty` <a name="resetCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCounty"></a>

```typescript
public resetCounty(): void
```

##### `resetCustom` <a name="resetCustom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCustom"></a>

```typescript
public resetCustom(): void
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetGender` <a name="resetGender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetGender"></a>

```typescript
public resetGender(): void
```

##### `resetHomePhoneNumber` <a name="resetHomePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetHomePhoneNumber"></a>

```typescript
public resetHomePhoneNumber(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetMailingAddress1` <a name="resetMailingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress1"></a>

```typescript
public resetMailingAddress1(): void
```

##### `resetMailingAddress2` <a name="resetMailingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress2"></a>

```typescript
public resetMailingAddress2(): void
```

##### `resetMailingAddress3` <a name="resetMailingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress3"></a>

```typescript
public resetMailingAddress3(): void
```

##### `resetMailingAddress4` <a name="resetMailingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress4"></a>

```typescript
public resetMailingAddress4(): void
```

##### `resetMailingCity` <a name="resetMailingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCity"></a>

```typescript
public resetMailingCity(): void
```

##### `resetMailingCountry` <a name="resetMailingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCountry"></a>

```typescript
public resetMailingCountry(): void
```

##### `resetMailingCounty` <a name="resetMailingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCounty"></a>

```typescript
public resetMailingCounty(): void
```

##### `resetMailingPostalCode` <a name="resetMailingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingPostalCode"></a>

```typescript
public resetMailingPostalCode(): void
```

##### `resetMailingProvince` <a name="resetMailingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingProvince"></a>

```typescript
public resetMailingProvince(): void
```

##### `resetMailingState` <a name="resetMailingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingState"></a>

```typescript
public resetMailingState(): void
```

##### `resetMiddleName` <a name="resetMiddleName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMiddleName"></a>

```typescript
public resetMiddleName(): void
```

##### `resetMobilePhoneNumber` <a name="resetMobilePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMobilePhoneNumber"></a>

```typescript
public resetMobilePhoneNumber(): void
```

##### `resetPartyType` <a name="resetPartyType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPartyType"></a>

```typescript
public resetPartyType(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProfileArn` <a name="resetProfileArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileArn"></a>

```typescript
public resetProfileArn(): void
```

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileId"></a>

```typescript
public resetProfileId(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetShippingAddress1` <a name="resetShippingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress1"></a>

```typescript
public resetShippingAddress1(): void
```

##### `resetShippingAddress2` <a name="resetShippingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress2"></a>

```typescript
public resetShippingAddress2(): void
```

##### `resetShippingAddress3` <a name="resetShippingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress3"></a>

```typescript
public resetShippingAddress3(): void
```

##### `resetShippingAddress4` <a name="resetShippingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress4"></a>

```typescript
public resetShippingAddress4(): void
```

##### `resetShippingCity` <a name="resetShippingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCity"></a>

```typescript
public resetShippingCity(): void
```

##### `resetShippingCountry` <a name="resetShippingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCountry"></a>

```typescript
public resetShippingCountry(): void
```

##### `resetShippingCounty` <a name="resetShippingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCounty"></a>

```typescript
public resetShippingCounty(): void
```

##### `resetShippingPostalCode` <a name="resetShippingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingPostalCode"></a>

```typescript
public resetShippingPostalCode(): void
```

##### `resetShippingProvince` <a name="resetShippingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingProvince"></a>

```typescript
public resetShippingProvince(): void
```

##### `resetShippingState` <a name="resetShippingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingState"></a>

```typescript
public resetShippingState(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumberInput">accountNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformationInput">additionalInformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1Input">address1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2Input">address2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3Input">address3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4Input">address4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1Input">billingAddress1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2Input">billingAddress2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3Input">billingAddress3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4Input">billingAddress4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCityInput">billingCityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountryInput">billingCountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountyInput">billingCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCodeInput">billingPostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvinceInput">billingProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingStateInput">billingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDateInput">birthDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddressInput">businessEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessNameInput">businessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumberInput">businessPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countyInput">countyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.customInput">customInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.genderInput">genderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumberInput">homePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1Input">mailingAddress1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2Input">mailingAddress2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3Input">mailingAddress3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4Input">mailingAddress4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCityInput">mailingCityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountryInput">mailingCountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountyInput">mailingCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCodeInput">mailingPostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvinceInput">mailingProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingStateInput">mailingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleNameInput">middleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumberInput">mobilePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyTypeInput">partyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArnInput">profileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1Input">shippingAddress1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2Input">shippingAddress2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3Input">shippingAddress3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4Input">shippingAddress4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCityInput">shippingCityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountryInput">shippingCountryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountyInput">shippingCountyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCodeInput">shippingPostalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvinceInput">shippingProvinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingStateInput">shippingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumber">accountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformation">additionalInformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1">address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2">address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3">address3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4">address4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1">billingAddress1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2">billingAddress2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3">billingAddress3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4">billingAddress4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCity">billingCity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountry">billingCountry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCounty">billingCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCode">billingPostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvince">billingProvince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingState">billingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDate">birthDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddress">businessEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessName">businessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumber">businessPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.custom">custom</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.gender">gender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumber">homePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1">mailingAddress1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2">mailingAddress2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3">mailingAddress3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4">mailingAddress4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCity">mailingCity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountry">mailingCountry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCounty">mailingCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCode">mailingPostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvince">mailingProvince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingState">mailingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumber">mobilePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyType">partyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArn">profileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1">shippingAddress1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2">shippingAddress2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3">shippingAddress3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4">shippingAddress4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCity">shippingCity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountry">shippingCountry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCounty">shippingCounty</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCode">shippingPostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvince">shippingProvince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingState">shippingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountNumberInput`<sup>Optional</sup> <a name="accountNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumberInput"></a>

```typescript
public readonly accountNumberInput: string;
```

- *Type:* string

---

##### `additionalInformationInput`<sup>Optional</sup> <a name="additionalInformationInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformationInput"></a>

```typescript
public readonly additionalInformationInput: string;
```

- *Type:* string

---

##### `address1Input`<sup>Optional</sup> <a name="address1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1Input"></a>

```typescript
public readonly address1Input: string;
```

- *Type:* string

---

##### `address2Input`<sup>Optional</sup> <a name="address2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2Input"></a>

```typescript
public readonly address2Input: string;
```

- *Type:* string

---

##### `address3Input`<sup>Optional</sup> <a name="address3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3Input"></a>

```typescript
public readonly address3Input: string;
```

- *Type:* string

---

##### `address4Input`<sup>Optional</sup> <a name="address4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4Input"></a>

```typescript
public readonly address4Input: string;
```

- *Type:* string

---

##### `billingAddress1Input`<sup>Optional</sup> <a name="billingAddress1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1Input"></a>

```typescript
public readonly billingAddress1Input: string;
```

- *Type:* string

---

##### `billingAddress2Input`<sup>Optional</sup> <a name="billingAddress2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2Input"></a>

```typescript
public readonly billingAddress2Input: string;
```

- *Type:* string

---

##### `billingAddress3Input`<sup>Optional</sup> <a name="billingAddress3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3Input"></a>

```typescript
public readonly billingAddress3Input: string;
```

- *Type:* string

---

##### `billingAddress4Input`<sup>Optional</sup> <a name="billingAddress4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4Input"></a>

```typescript
public readonly billingAddress4Input: string;
```

- *Type:* string

---

##### `billingCityInput`<sup>Optional</sup> <a name="billingCityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCityInput"></a>

```typescript
public readonly billingCityInput: string;
```

- *Type:* string

---

##### `billingCountryInput`<sup>Optional</sup> <a name="billingCountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountryInput"></a>

```typescript
public readonly billingCountryInput: string;
```

- *Type:* string

---

##### `billingCountyInput`<sup>Optional</sup> <a name="billingCountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountyInput"></a>

```typescript
public readonly billingCountyInput: string;
```

- *Type:* string

---

##### `billingPostalCodeInput`<sup>Optional</sup> <a name="billingPostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCodeInput"></a>

```typescript
public readonly billingPostalCodeInput: string;
```

- *Type:* string

---

##### `billingProvinceInput`<sup>Optional</sup> <a name="billingProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvinceInput"></a>

```typescript
public readonly billingProvinceInput: string;
```

- *Type:* string

---

##### `billingStateInput`<sup>Optional</sup> <a name="billingStateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingStateInput"></a>

```typescript
public readonly billingStateInput: string;
```

- *Type:* string

---

##### `birthDateInput`<sup>Optional</sup> <a name="birthDateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDateInput"></a>

```typescript
public readonly birthDateInput: string;
```

- *Type:* string

---

##### `businessEmailAddressInput`<sup>Optional</sup> <a name="businessEmailAddressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddressInput"></a>

```typescript
public readonly businessEmailAddressInput: string;
```

- *Type:* string

---

##### `businessNameInput`<sup>Optional</sup> <a name="businessNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessNameInput"></a>

```typescript
public readonly businessNameInput: string;
```

- *Type:* string

---

##### `businessPhoneNumberInput`<sup>Optional</sup> <a name="businessPhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumberInput"></a>

```typescript
public readonly businessPhoneNumberInput: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countyInput"></a>

```typescript
public readonly countyInput: string;
```

- *Type:* string

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.customInput"></a>

```typescript
public readonly customInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `genderInput`<sup>Optional</sup> <a name="genderInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.genderInput"></a>

```typescript
public readonly genderInput: string;
```

- *Type:* string

---

##### `homePhoneNumberInput`<sup>Optional</sup> <a name="homePhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumberInput"></a>

```typescript
public readonly homePhoneNumberInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `mailingAddress1Input`<sup>Optional</sup> <a name="mailingAddress1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1Input"></a>

```typescript
public readonly mailingAddress1Input: string;
```

- *Type:* string

---

##### `mailingAddress2Input`<sup>Optional</sup> <a name="mailingAddress2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2Input"></a>

```typescript
public readonly mailingAddress2Input: string;
```

- *Type:* string

---

##### `mailingAddress3Input`<sup>Optional</sup> <a name="mailingAddress3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3Input"></a>

```typescript
public readonly mailingAddress3Input: string;
```

- *Type:* string

---

##### `mailingAddress4Input`<sup>Optional</sup> <a name="mailingAddress4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4Input"></a>

```typescript
public readonly mailingAddress4Input: string;
```

- *Type:* string

---

##### `mailingCityInput`<sup>Optional</sup> <a name="mailingCityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCityInput"></a>

```typescript
public readonly mailingCityInput: string;
```

- *Type:* string

---

##### `mailingCountryInput`<sup>Optional</sup> <a name="mailingCountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountryInput"></a>

```typescript
public readonly mailingCountryInput: string;
```

- *Type:* string

---

##### `mailingCountyInput`<sup>Optional</sup> <a name="mailingCountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountyInput"></a>

```typescript
public readonly mailingCountyInput: string;
```

- *Type:* string

---

##### `mailingPostalCodeInput`<sup>Optional</sup> <a name="mailingPostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCodeInput"></a>

```typescript
public readonly mailingPostalCodeInput: string;
```

- *Type:* string

---

##### `mailingProvinceInput`<sup>Optional</sup> <a name="mailingProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvinceInput"></a>

```typescript
public readonly mailingProvinceInput: string;
```

- *Type:* string

---

##### `mailingStateInput`<sup>Optional</sup> <a name="mailingStateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingStateInput"></a>

```typescript
public readonly mailingStateInput: string;
```

- *Type:* string

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleNameInput"></a>

```typescript
public readonly middleNameInput: string;
```

- *Type:* string

---

##### `mobilePhoneNumberInput`<sup>Optional</sup> <a name="mobilePhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumberInput"></a>

```typescript
public readonly mobilePhoneNumberInput: string;
```

- *Type:* string

---

##### `partyTypeInput`<sup>Optional</sup> <a name="partyTypeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyTypeInput"></a>

```typescript
public readonly partyTypeInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `profileArnInput`<sup>Optional</sup> <a name="profileArnInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArnInput"></a>

```typescript
public readonly profileArnInput: string;
```

- *Type:* string

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `shippingAddress1Input`<sup>Optional</sup> <a name="shippingAddress1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1Input"></a>

```typescript
public readonly shippingAddress1Input: string;
```

- *Type:* string

---

##### `shippingAddress2Input`<sup>Optional</sup> <a name="shippingAddress2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2Input"></a>

```typescript
public readonly shippingAddress2Input: string;
```

- *Type:* string

---

##### `shippingAddress3Input`<sup>Optional</sup> <a name="shippingAddress3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3Input"></a>

```typescript
public readonly shippingAddress3Input: string;
```

- *Type:* string

---

##### `shippingAddress4Input`<sup>Optional</sup> <a name="shippingAddress4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4Input"></a>

```typescript
public readonly shippingAddress4Input: string;
```

- *Type:* string

---

##### `shippingCityInput`<sup>Optional</sup> <a name="shippingCityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCityInput"></a>

```typescript
public readonly shippingCityInput: string;
```

- *Type:* string

---

##### `shippingCountryInput`<sup>Optional</sup> <a name="shippingCountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountryInput"></a>

```typescript
public readonly shippingCountryInput: string;
```

- *Type:* string

---

##### `shippingCountyInput`<sup>Optional</sup> <a name="shippingCountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountyInput"></a>

```typescript
public readonly shippingCountyInput: string;
```

- *Type:* string

---

##### `shippingPostalCodeInput`<sup>Optional</sup> <a name="shippingPostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCodeInput"></a>

```typescript
public readonly shippingPostalCodeInput: string;
```

- *Type:* string

---

##### `shippingProvinceInput`<sup>Optional</sup> <a name="shippingProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvinceInput"></a>

```typescript
public readonly shippingProvinceInput: string;
```

- *Type:* string

---

##### `shippingStateInput`<sup>Optional</sup> <a name="shippingStateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingStateInput"></a>

```typescript
public readonly shippingStateInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `accountNumber`<sup>Required</sup> <a name="accountNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumber"></a>

```typescript
public readonly accountNumber: string;
```

- *Type:* string

---

##### `additionalInformation`<sup>Required</sup> <a name="additionalInformation" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformation"></a>

```typescript
public readonly additionalInformation: string;
```

- *Type:* string

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1"></a>

```typescript
public readonly address1: string;
```

- *Type:* string

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2"></a>

```typescript
public readonly address2: string;
```

- *Type:* string

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3"></a>

```typescript
public readonly address3: string;
```

- *Type:* string

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4"></a>

```typescript
public readonly address4: string;
```

- *Type:* string

---

##### `billingAddress1`<sup>Required</sup> <a name="billingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1"></a>

```typescript
public readonly billingAddress1: string;
```

- *Type:* string

---

##### `billingAddress2`<sup>Required</sup> <a name="billingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2"></a>

```typescript
public readonly billingAddress2: string;
```

- *Type:* string

---

##### `billingAddress3`<sup>Required</sup> <a name="billingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3"></a>

```typescript
public readonly billingAddress3: string;
```

- *Type:* string

---

##### `billingAddress4`<sup>Required</sup> <a name="billingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4"></a>

```typescript
public readonly billingAddress4: string;
```

- *Type:* string

---

##### `billingCity`<sup>Required</sup> <a name="billingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCity"></a>

```typescript
public readonly billingCity: string;
```

- *Type:* string

---

##### `billingCountry`<sup>Required</sup> <a name="billingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountry"></a>

```typescript
public readonly billingCountry: string;
```

- *Type:* string

---

##### `billingCounty`<sup>Required</sup> <a name="billingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCounty"></a>

```typescript
public readonly billingCounty: string;
```

- *Type:* string

---

##### `billingPostalCode`<sup>Required</sup> <a name="billingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCode"></a>

```typescript
public readonly billingPostalCode: string;
```

- *Type:* string

---

##### `billingProvince`<sup>Required</sup> <a name="billingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvince"></a>

```typescript
public readonly billingProvince: string;
```

- *Type:* string

---

##### `billingState`<sup>Required</sup> <a name="billingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingState"></a>

```typescript
public readonly billingState: string;
```

- *Type:* string

---

##### `birthDate`<sup>Required</sup> <a name="birthDate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDate"></a>

```typescript
public readonly birthDate: string;
```

- *Type:* string

---

##### `businessEmailAddress`<sup>Required</sup> <a name="businessEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddress"></a>

```typescript
public readonly businessEmailAddress: string;
```

- *Type:* string

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessName"></a>

```typescript
public readonly businessName: string;
```

- *Type:* string

---

##### `businessPhoneNumber`<sup>Required</sup> <a name="businessPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumber"></a>

```typescript
public readonly businessPhoneNumber: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.custom"></a>

```typescript
public readonly custom: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `gender`<sup>Required</sup> <a name="gender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.gender"></a>

```typescript
public readonly gender: string;
```

- *Type:* string

---

##### `homePhoneNumber`<sup>Required</sup> <a name="homePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumber"></a>

```typescript
public readonly homePhoneNumber: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `mailingAddress1`<sup>Required</sup> <a name="mailingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1"></a>

```typescript
public readonly mailingAddress1: string;
```

- *Type:* string

---

##### `mailingAddress2`<sup>Required</sup> <a name="mailingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2"></a>

```typescript
public readonly mailingAddress2: string;
```

- *Type:* string

---

##### `mailingAddress3`<sup>Required</sup> <a name="mailingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3"></a>

```typescript
public readonly mailingAddress3: string;
```

- *Type:* string

---

##### `mailingAddress4`<sup>Required</sup> <a name="mailingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4"></a>

```typescript
public readonly mailingAddress4: string;
```

- *Type:* string

---

##### `mailingCity`<sup>Required</sup> <a name="mailingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCity"></a>

```typescript
public readonly mailingCity: string;
```

- *Type:* string

---

##### `mailingCountry`<sup>Required</sup> <a name="mailingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountry"></a>

```typescript
public readonly mailingCountry: string;
```

- *Type:* string

---

##### `mailingCounty`<sup>Required</sup> <a name="mailingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCounty"></a>

```typescript
public readonly mailingCounty: string;
```

- *Type:* string

---

##### `mailingPostalCode`<sup>Required</sup> <a name="mailingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCode"></a>

```typescript
public readonly mailingPostalCode: string;
```

- *Type:* string

---

##### `mailingProvince`<sup>Required</sup> <a name="mailingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvince"></a>

```typescript
public readonly mailingProvince: string;
```

- *Type:* string

---

##### `mailingState`<sup>Required</sup> <a name="mailingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingState"></a>

```typescript
public readonly mailingState: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `mobilePhoneNumber`<sup>Required</sup> <a name="mobilePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumber"></a>

```typescript
public readonly mobilePhoneNumber: string;
```

- *Type:* string

---

##### `partyType`<sup>Required</sup> <a name="partyType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyType"></a>

```typescript
public readonly partyType: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArn"></a>

```typescript
public readonly profileArn: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `shippingAddress1`<sup>Required</sup> <a name="shippingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1"></a>

```typescript
public readonly shippingAddress1: string;
```

- *Type:* string

---

##### `shippingAddress2`<sup>Required</sup> <a name="shippingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2"></a>

```typescript
public readonly shippingAddress2: string;
```

- *Type:* string

---

##### `shippingAddress3`<sup>Required</sup> <a name="shippingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3"></a>

```typescript
public readonly shippingAddress3: string;
```

- *Type:* string

---

##### `shippingAddress4`<sup>Required</sup> <a name="shippingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4"></a>

```typescript
public readonly shippingAddress4: string;
```

- *Type:* string

---

##### `shippingCity`<sup>Required</sup> <a name="shippingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCity"></a>

```typescript
public readonly shippingCity: string;
```

- *Type:* string

---

##### `shippingCountry`<sup>Required</sup> <a name="shippingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountry"></a>

```typescript
public readonly shippingCountry: string;
```

- *Type:* string

---

##### `shippingCounty`<sup>Required</sup> <a name="shippingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCounty"></a>

```typescript
public readonly shippingCounty: string;
```

- *Type:* string

---

##### `shippingPostalCode`<sup>Required</sup> <a name="shippingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCode"></a>

```typescript
public readonly shippingPostalCode: string;
```

- *Type:* string

---

##### `shippingProvince`<sup>Required</sup> <a name="shippingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvince"></a>

```typescript
public readonly shippingProvince: string;
```

- *Type:* string

---

##### `shippingState`<sup>Required</sup> <a name="shippingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingState"></a>

```typescript
public readonly shippingState: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes">putAgentAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes">putCustomerProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes">putSystemAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetAgentAttributes">resetAgentAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomerProfileAttributes">resetCustomerProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetSystemAttributes">resetSystemAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentAttributes` <a name="putAgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes"></a>

```typescript
public putAgentAttributes(value: WisdomMessageTemplateDefaultAttributesAgentAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

---

##### `putCustomerProfileAttributes` <a name="putCustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes"></a>

```typescript
public putCustomerProfileAttributes(value: WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

---

##### `putSystemAttributes` <a name="putSystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes"></a>

```typescript
public putSystemAttributes(value: WisdomMessageTemplateDefaultAttributesSystemAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

---

##### `resetAgentAttributes` <a name="resetAgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetAgentAttributes"></a>

```typescript
public resetAgentAttributes(): void
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomAttributes"></a>

```typescript
public resetCustomAttributes(): void
```

##### `resetCustomerProfileAttributes` <a name="resetCustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomerProfileAttributes"></a>

```typescript
public resetCustomerProfileAttributes(): void
```

##### `resetSystemAttributes` <a name="resetSystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetSystemAttributes"></a>

```typescript
public resetSystemAttributes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributes">agentAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference">WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributes">customerProfileAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributes">systemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributesInput">agentAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributesInput">customAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributesInput">customerProfileAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributesInput">systemAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributes">customAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentAttributes`<sup>Required</sup> <a name="agentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributes"></a>

```typescript
public readonly agentAttributes: WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference">WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference</a>

---

##### `customerProfileAttributes`<sup>Required</sup> <a name="customerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributes"></a>

```typescript
public readonly customerProfileAttributes: WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference</a>

---

##### `systemAttributes`<sup>Required</sup> <a name="systemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributes"></a>

```typescript
public readonly systemAttributes: WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference</a>

---

##### `agentAttributesInput`<sup>Optional</sup> <a name="agentAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributesInput"></a>

```typescript
public readonly agentAttributesInput: IResolvable | WisdomMessageTemplateDefaultAttributesAgentAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributesInput"></a>

```typescript
public readonly customAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customerProfileAttributesInput`<sup>Optional</sup> <a name="customerProfileAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributesInput"></a>

```typescript
public readonly customerProfileAttributesInput: IResolvable | WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

---

##### `systemAttributesInput`<sup>Optional</sup> <a name="systemAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributesInput"></a>

```typescript
public readonly systemAttributesInput: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributes"></a>

```typescript
public readonly customAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateDefaultAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint">putCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint">putSystemEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetCustomerEndpoint">resetCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetSystemEndpoint">resetSystemEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerEndpoint` <a name="putCustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint"></a>

```typescript
public putCustomerEndpoint(value: WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

---

##### `putSystemEndpoint` <a name="putSystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint"></a>

```typescript
public putSystemEndpoint(value: WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

---

##### `resetCustomerEndpoint` <a name="resetCustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetCustomerEndpoint"></a>

```typescript
public resetCustomerEndpoint(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSystemEndpoint` <a name="resetSystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetSystemEndpoint"></a>

```typescript
public resetSystemEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpoint">customerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpoint">systemEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpointInput">customerEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpointInput">systemEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerEndpoint`<sup>Required</sup> <a name="customerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpoint"></a>

```typescript
public readonly customerEndpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference</a>

---

##### `systemEndpoint`<sup>Required</sup> <a name="systemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpoint"></a>

```typescript
public readonly systemEndpoint: WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference</a>

---

##### `customerEndpointInput`<sup>Optional</sup> <a name="customerEndpointInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpointInput"></a>

```typescript
public readonly customerEndpointInput: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `systemEndpointInput`<sup>Optional</sup> <a name="systemEndpointInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpointInput"></a>

```typescript
public readonly systemEndpointInput: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

---


### WisdomMessageTemplateGroupingConfigurationOutputReference <a name="WisdomMessageTemplateGroupingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetCriteria"></a>

```typescript
public resetCriteria(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteriaInput">criteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteria">criteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteria"></a>

```typescript
public readonly criteria: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateGroupingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

---


### WisdomMessageTemplateMessageTemplateAttachmentsList <a name="WisdomMessageTemplateMessageTemplateAttachmentsList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get"></a>

```typescript
public get(index: number): WisdomMessageTemplateMessageTemplateAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateMessageTemplateAttachments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>[]

---


### WisdomMessageTemplateMessageTemplateAttachmentsOutputReference <a name="WisdomMessageTemplateMessageTemplateAttachmentsOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentId">resetAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentName">resetAttachmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetS3PresignedUrl">resetS3PresignedUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttachmentId` <a name="resetAttachmentId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentId"></a>

```typescript
public resetAttachmentId(): void
```

##### `resetAttachmentName` <a name="resetAttachmentName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentName"></a>

```typescript
public resetAttachmentName(): void
```

##### `resetS3PresignedUrl` <a name="resetS3PresignedUrl" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetS3PresignedUrl"></a>

```typescript
public resetS3PresignedUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentIdInput">attachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentNameInput">attachmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrlInput">s3PresignedUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentId">attachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentName">attachmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrl">s3PresignedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachmentIdInput`<sup>Optional</sup> <a name="attachmentIdInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentIdInput"></a>

```typescript
public readonly attachmentIdInput: string;
```

- *Type:* string

---

##### `attachmentNameInput`<sup>Optional</sup> <a name="attachmentNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentNameInput"></a>

```typescript
public readonly attachmentNameInput: string;
```

- *Type:* string

---

##### `s3PresignedUrlInput`<sup>Optional</sup> <a name="s3PresignedUrlInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrlInput"></a>

```typescript
public readonly s3PresignedUrlInput: string;
```

- *Type:* string

---

##### `attachmentId`<sup>Required</sup> <a name="attachmentId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentId"></a>

```typescript
public readonly attachmentId: string;
```

- *Type:* string

---

##### `attachmentName`<sup>Required</sup> <a name="attachmentName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentName"></a>

```typescript
public readonly attachmentName: string;
```

- *Type:* string

---

##### `s3PresignedUrl`<sup>Required</sup> <a name="s3PresignedUrl" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrl"></a>

```typescript
public readonly s3PresignedUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateMessageTemplateAttachments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments">WisdomMessageTemplateMessageTemplateAttachments</a>

---


### WisdomMessageTemplateTagsList <a name="WisdomMessageTemplateTagsList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get"></a>

```typescript
public get(index: number): WisdomMessageTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>[]

---


### WisdomMessageTemplateTagsOutputReference <a name="WisdomMessageTemplateTagsOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer"></a>

```typescript
import { wisdomMessageTemplate } from '@cdktn/provider-awscc'

new wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WisdomMessageTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags">WisdomMessageTemplateTags</a>

---



