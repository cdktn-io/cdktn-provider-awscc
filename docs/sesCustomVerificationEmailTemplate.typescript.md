# `sesCustomVerificationEmailTemplate` Submodule <a name="`sesCustomVerificationEmailTemplate` Submodule" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesCustomVerificationEmailTemplate <a name="SesCustomVerificationEmailTemplate" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template awscc_ses_custom_verification_email_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer"></a>

```typescript
import { sesCustomVerificationEmailTemplate } from '@cdktn/provider-awscc'

new sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate(scope: Construct, id: string, config: SesCustomVerificationEmailTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig">SesCustomVerificationEmailTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig">SesCustomVerificationEmailTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | SesCustomVerificationEmailTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct"></a>

```typescript
import { sesCustomVerificationEmailTemplate } from '@cdktn/provider-awscc'

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement"></a>

```typescript
import { sesCustomVerificationEmailTemplate } from '@cdktn/provider-awscc'

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource"></a>

```typescript
import { sesCustomVerificationEmailTemplate } from '@cdktn/provider-awscc'

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport"></a>

```typescript
import { sesCustomVerificationEmailTemplate } from '@cdktn/provider-awscc'

sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SesCustomVerificationEmailTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesCustomVerificationEmailTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesCustomVerificationEmailTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesCustomVerificationEmailTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList">SesCustomVerificationEmailTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrlInput">failureRedirectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddressInput">fromEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrlInput">successRedirectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContentInput">templateContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubjectInput">templateSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrl">failureRedirectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddress">fromEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrl">successRedirectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContent">templateContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubject">templateSubject</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tags"></a>

```typescript
public readonly tags: SesCustomVerificationEmailTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList">SesCustomVerificationEmailTemplateTagsList</a>

---

##### `failureRedirectionUrlInput`<sup>Optional</sup> <a name="failureRedirectionUrlInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrlInput"></a>

```typescript
public readonly failureRedirectionUrlInput: string;
```

- *Type:* string

---

##### `fromEmailAddressInput`<sup>Optional</sup> <a name="fromEmailAddressInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddressInput"></a>

```typescript
public readonly fromEmailAddressInput: string;
```

- *Type:* string

---

##### `successRedirectionUrlInput`<sup>Optional</sup> <a name="successRedirectionUrlInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrlInput"></a>

```typescript
public readonly successRedirectionUrlInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SesCustomVerificationEmailTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]

---

##### `templateContentInput`<sup>Optional</sup> <a name="templateContentInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContentInput"></a>

```typescript
public readonly templateContentInput: string;
```

- *Type:* string

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `templateSubjectInput`<sup>Optional</sup> <a name="templateSubjectInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubjectInput"></a>

```typescript
public readonly templateSubjectInput: string;
```

- *Type:* string

---

##### `failureRedirectionUrl`<sup>Required</sup> <a name="failureRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.failureRedirectionUrl"></a>

```typescript
public readonly failureRedirectionUrl: string;
```

- *Type:* string

---

##### `fromEmailAddress`<sup>Required</sup> <a name="fromEmailAddress" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.fromEmailAddress"></a>

```typescript
public readonly fromEmailAddress: string;
```

- *Type:* string

---

##### `successRedirectionUrl`<sup>Required</sup> <a name="successRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.successRedirectionUrl"></a>

```typescript
public readonly successRedirectionUrl: string;
```

- *Type:* string

---

##### `templateContent`<sup>Required</sup> <a name="templateContent" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateContent"></a>

```typescript
public readonly templateContent: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `templateSubject`<sup>Required</sup> <a name="templateSubject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.templateSubject"></a>

```typescript
public readonly templateSubject: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesCustomVerificationEmailTemplateConfig <a name="SesCustomVerificationEmailTemplateConfig" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.Initializer"></a>

```typescript
import { sesCustomVerificationEmailTemplate } from '@cdktn/provider-awscc'

const sesCustomVerificationEmailTemplateConfig: sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.failureRedirectionUrl">failureRedirectionUrl</a></code> | <code>string</code> | The URL that the recipient of the verification email is sent to if his or her address is not successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.fromEmailAddress">fromEmailAddress</a></code> | <code>string</code> | The email address that the custom verification email is sent from. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.successRedirectionUrl">successRedirectionUrl</a></code> | <code>string</code> | The URL that the recipient of the verification email is sent to if his or her address is successfully verified. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateContent">templateContent</a></code> | <code>string</code> | The content of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateName">templateName</a></code> | <code>string</code> | The name of the custom verification email template. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateSubject">templateSubject</a></code> | <code>string</code> | The subject line of the custom verification email. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]</code> | The tags (keys and values) associated with the tenant. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `failureRedirectionUrl`<sup>Required</sup> <a name="failureRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.failureRedirectionUrl"></a>

```typescript
public readonly failureRedirectionUrl: string;
```

- *Type:* string

The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template#failure_redirection_url SesCustomVerificationEmailTemplate#failure_redirection_url}

---

##### `fromEmailAddress`<sup>Required</sup> <a name="fromEmailAddress" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.fromEmailAddress"></a>

```typescript
public readonly fromEmailAddress: string;
```

- *Type:* string

The email address that the custom verification email is sent from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template#from_email_address SesCustomVerificationEmailTemplate#from_email_address}

---

##### `successRedirectionUrl`<sup>Required</sup> <a name="successRedirectionUrl" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.successRedirectionUrl"></a>

```typescript
public readonly successRedirectionUrl: string;
```

- *Type:* string

The URL that the recipient of the verification email is sent to if his or her address is successfully verified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template#success_redirection_url SesCustomVerificationEmailTemplate#success_redirection_url}

---

##### `templateContent`<sup>Required</sup> <a name="templateContent" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateContent"></a>

```typescript
public readonly templateContent: string;
```

- *Type:* string

The content of the custom verification email.

The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template#template_content SesCustomVerificationEmailTemplate#template_content}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The name of the custom verification email template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template#template_name SesCustomVerificationEmailTemplate#template_name}

---

##### `templateSubject`<sup>Required</sup> <a name="templateSubject" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.templateSubject"></a>

```typescript
public readonly templateSubject: string;
```

- *Type:* string

The subject line of the custom verification email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template#template_subject SesCustomVerificationEmailTemplate#template_subject}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SesCustomVerificationEmailTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]

The tags (keys and values) associated with the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template#tags SesCustomVerificationEmailTemplate#tags}

---

### SesCustomVerificationEmailTemplateTags <a name="SesCustomVerificationEmailTemplateTags" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.Initializer"></a>

```typescript
import { sesCustomVerificationEmailTemplate } from '@cdktn/provider-awscc'

const sesCustomVerificationEmailTemplateTags: sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.key">key</a></code> | <code>string</code> | The key of the key-value tag. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.value">value</a></code> | <code>string</code> | The value of the key-value tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the key-value tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template#key SesCustomVerificationEmailTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the key-value tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_custom_verification_email_template#value SesCustomVerificationEmailTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SesCustomVerificationEmailTemplateTagsList <a name="SesCustomVerificationEmailTemplateTagsList" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer"></a>

```typescript
import { sesCustomVerificationEmailTemplate } from '@cdktn/provider-awscc'

new sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get"></a>

```typescript
public get(index: number): SesCustomVerificationEmailTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesCustomVerificationEmailTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>[]

---


### SesCustomVerificationEmailTemplateTagsOutputReference <a name="SesCustomVerificationEmailTemplateTagsOutputReference" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer"></a>

```typescript
import { sesCustomVerificationEmailTemplate } from '@cdktn/provider-awscc'

new sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesCustomVerificationEmailTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesCustomVerificationEmailTemplate.SesCustomVerificationEmailTemplateTags">SesCustomVerificationEmailTemplateTags</a>

---



