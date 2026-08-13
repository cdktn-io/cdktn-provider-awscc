# `cloudformationGeneratedTemplate` Submodule <a name="`cloudformationGeneratedTemplate` Submodule" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationGeneratedTemplate <a name="CloudformationGeneratedTemplate" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_generated_template awscc_cloudformation_generated_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer"></a>

```typescript
import { cloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

new cloudformationGeneratedTemplate.CloudformationGeneratedTemplate(scope: Construct, id: string, config: CloudformationGeneratedTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig">CloudformationGeneratedTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig">CloudformationGeneratedTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration">putTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetTemplateConfiguration">resetTemplateConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTemplateConfiguration` <a name="putTemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration"></a>

```typescript
public putTemplateConfiguration(value: CloudformationGeneratedTemplateTemplateConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.putTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

---

##### `resetTemplateConfiguration` <a name="resetTemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.resetTemplateConfiguration"></a>

```typescript
public resetTemplateConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct"></a>

```typescript
import { cloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement"></a>

```typescript
import { cloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource"></a>

```typescript
import { cloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport"></a>

```typescript
import { cloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationGeneratedTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationGeneratedTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_generated_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationGeneratedTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateId">generatedTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.progress">progress</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference">CloudformationGeneratedTemplateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference">CloudformationGeneratedTemplateTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.totalWarnings">totalWarnings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateNameInput">generatedTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfigurationInput">templateConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateName">generatedTemplateName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `generatedTemplateId`<sup>Required</sup> <a name="generatedTemplateId" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateId"></a>

```typescript
public readonly generatedTemplateId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `progress`<sup>Required</sup> <a name="progress" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.progress"></a>

```typescript
public readonly progress: CloudformationGeneratedTemplateProgressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference">CloudformationGeneratedTemplateProgressOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfiguration"></a>

```typescript
public readonly templateConfiguration: CloudformationGeneratedTemplateTemplateConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference">CloudformationGeneratedTemplateTemplateConfigurationOutputReference</a>

---

##### `totalWarnings`<sup>Required</sup> <a name="totalWarnings" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.totalWarnings"></a>

```typescript
public readonly totalWarnings: number;
```

- *Type:* number

---

##### `generatedTemplateNameInput`<sup>Optional</sup> <a name="generatedTemplateNameInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateNameInput"></a>

```typescript
public readonly generatedTemplateNameInput: string;
```

- *Type:* string

---

##### `templateConfigurationInput`<sup>Optional</sup> <a name="templateConfigurationInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.templateConfigurationInput"></a>

```typescript
public readonly templateConfigurationInput: IResolvable | CloudformationGeneratedTemplateTemplateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

---

##### `generatedTemplateName`<sup>Required</sup> <a name="generatedTemplateName" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.generatedTemplateName"></a>

```typescript
public readonly generatedTemplateName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationGeneratedTemplateConfig <a name="CloudformationGeneratedTemplateConfig" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.Initializer"></a>

```typescript
import { cloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

const cloudformationGeneratedTemplateConfig: cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.generatedTemplateName">generatedTemplateName</a></code> | <code>string</code> | The name assigned to the generated template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | The configuration details of the generated template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `generatedTemplateName`<sup>Required</sup> <a name="generatedTemplateName" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.generatedTemplateName"></a>

```typescript
public readonly generatedTemplateName: string;
```

- *Type:* string

The name assigned to the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_generated_template#generated_template_name CloudformationGeneratedTemplate#generated_template_name}

---

##### `templateConfiguration`<sup>Optional</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateConfig.property.templateConfiguration"></a>

```typescript
public readonly templateConfiguration: CloudformationGeneratedTemplateTemplateConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

The configuration details of the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_generated_template#template_configuration CloudformationGeneratedTemplate#template_configuration}

---

### CloudformationGeneratedTemplateProgress <a name="CloudformationGeneratedTemplateProgress" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress.Initializer"></a>

```typescript
import { cloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

const cloudformationGeneratedTemplateProgress: cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress = { ... }
```


### CloudformationGeneratedTemplateTemplateConfiguration <a name="CloudformationGeneratedTemplateTemplateConfiguration" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.Initializer"></a>

```typescript
import { cloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

const cloudformationGeneratedTemplateTemplateConfiguration: cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | The DeletionPolicy assigned to resources in the generated template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.updateReplacePolicy">updateReplacePolicy</a></code> | <code>string</code> | The UpdateReplacePolicy assigned to resources in the generated template. |

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

The DeletionPolicy assigned to resources in the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_generated_template#deletion_policy CloudformationGeneratedTemplate#deletion_policy}

---

##### `updateReplacePolicy`<sup>Optional</sup> <a name="updateReplacePolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration.property.updateReplacePolicy"></a>

```typescript
public readonly updateReplacePolicy: string;
```

- *Type:* string

The UpdateReplacePolicy assigned to resources in the generated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudformation_generated_template#update_replace_policy CloudformationGeneratedTemplate#update_replace_policy}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationGeneratedTemplateProgressOutputReference <a name="CloudformationGeneratedTemplateProgressOutputReference" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer"></a>

```typescript
import { cloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

new cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed">resourcesFailed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending">resourcesPending</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing">resourcesProcessing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded">resourcesSucceeded</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress">CloudformationGeneratedTemplateProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcesFailed`<sup>Required</sup> <a name="resourcesFailed" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed"></a>

```typescript
public readonly resourcesFailed: number;
```

- *Type:* number

---

##### `resourcesPending`<sup>Required</sup> <a name="resourcesPending" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending"></a>

```typescript
public readonly resourcesPending: number;
```

- *Type:* number

---

##### `resourcesProcessing`<sup>Required</sup> <a name="resourcesProcessing" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing"></a>

```typescript
public readonly resourcesProcessing: number;
```

- *Type:* number

---

##### `resourcesSucceeded`<sup>Required</sup> <a name="resourcesSucceeded" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded"></a>

```typescript
public readonly resourcesSucceeded: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudformationGeneratedTemplateProgress;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateProgress">CloudformationGeneratedTemplateProgress</a>

---


### CloudformationGeneratedTemplateTemplateConfigurationOutputReference <a name="CloudformationGeneratedTemplateTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

new cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetUpdateReplacePolicy">resetUpdateReplacePolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetUpdateReplacePolicy` <a name="resetUpdateReplacePolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.resetUpdateReplacePolicy"></a>

```typescript
public resetUpdateReplacePolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicyInput">updateReplacePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy">updateReplacePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `updateReplacePolicyInput`<sup>Optional</sup> <a name="updateReplacePolicyInput" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicyInput"></a>

```typescript
public readonly updateReplacePolicyInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `updateReplacePolicy`<sup>Required</sup> <a name="updateReplacePolicy" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy"></a>

```typescript
public readonly updateReplacePolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationGeneratedTemplateTemplateConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGeneratedTemplate.CloudformationGeneratedTemplateTemplateConfiguration">CloudformationGeneratedTemplateTemplateConfiguration</a>

---



