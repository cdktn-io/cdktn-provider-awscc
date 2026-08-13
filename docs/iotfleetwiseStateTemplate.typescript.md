# `iotfleetwiseStateTemplate` Submodule <a name="`iotfleetwiseStateTemplate` Submodule" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseStateTemplate <a name="IotfleetwiseStateTemplate" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template awscc_iotfleetwise_state_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer"></a>

```typescript
import { iotfleetwiseStateTemplate } from '@cdktn/provider-awscc'

new iotfleetwiseStateTemplate.IotfleetwiseStateTemplate(scope: Construct, id: string, config: IotfleetwiseStateTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig">IotfleetwiseStateTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig">IotfleetwiseStateTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDataExtraDimensions">resetDataExtraDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetMetadataExtraDimensions">resetMetadataExtraDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | IotfleetwiseStateTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]

---

##### `resetDataExtraDimensions` <a name="resetDataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDataExtraDimensions"></a>

```typescript
public resetDataExtraDimensions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMetadataExtraDimensions` <a name="resetMetadataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetMetadataExtraDimensions"></a>

```typescript
public resetMetadataExtraDimensions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseStateTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct"></a>

```typescript
import { iotfleetwiseStateTemplate } from '@cdktn/provider-awscc'

iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement"></a>

```typescript
import { iotfleetwiseStateTemplate } from '@cdktn/provider-awscc'

iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource"></a>

```typescript
import { iotfleetwiseStateTemplate } from '@cdktn/provider-awscc'

iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport"></a>

```typescript
import { iotfleetwiseStateTemplate } from '@cdktn/provider-awscc'

iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotfleetwiseStateTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotfleetwiseStateTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotfleetwiseStateTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseStateTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lastModificationTime">lastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateId">stateTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList">IotfleetwiseStateTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensionsInput">dataExtraDimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensionsInput">metadataExtraDimensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArnInput">signalCatalogArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplatePropertiesInput">stateTemplatePropertiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensions">dataExtraDimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensions">metadataExtraDimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArn">signalCatalogArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateProperties">stateTemplateProperties</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModificationTime`<sup>Required</sup> <a name="lastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lastModificationTime"></a>

```typescript
public readonly lastModificationTime: string;
```

- *Type:* string

---

##### `stateTemplateId`<sup>Required</sup> <a name="stateTemplateId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateId"></a>

```typescript
public readonly stateTemplateId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tags"></a>

```typescript
public readonly tags: IotfleetwiseStateTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList">IotfleetwiseStateTemplateTagsList</a>

---

##### `dataExtraDimensionsInput`<sup>Optional</sup> <a name="dataExtraDimensionsInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensionsInput"></a>

```typescript
public readonly dataExtraDimensionsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `metadataExtraDimensionsInput`<sup>Optional</sup> <a name="metadataExtraDimensionsInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensionsInput"></a>

```typescript
public readonly metadataExtraDimensionsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `signalCatalogArnInput`<sup>Optional</sup> <a name="signalCatalogArnInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArnInput"></a>

```typescript
public readonly signalCatalogArnInput: string;
```

- *Type:* string

---

##### `stateTemplatePropertiesInput`<sup>Optional</sup> <a name="stateTemplatePropertiesInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplatePropertiesInput"></a>

```typescript
public readonly stateTemplatePropertiesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotfleetwiseStateTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]

---

##### `dataExtraDimensions`<sup>Required</sup> <a name="dataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensions"></a>

```typescript
public readonly dataExtraDimensions: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `metadataExtraDimensions`<sup>Required</sup> <a name="metadataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensions"></a>

```typescript
public readonly metadataExtraDimensions: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signalCatalogArn`<sup>Required</sup> <a name="signalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArn"></a>

```typescript
public readonly signalCatalogArn: string;
```

- *Type:* string

---

##### `stateTemplateProperties`<sup>Required</sup> <a name="stateTemplateProperties" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateProperties"></a>

```typescript
public readonly stateTemplateProperties: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseStateTemplateConfig <a name="IotfleetwiseStateTemplateConfig" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.Initializer"></a>

```typescript
import { iotfleetwiseStateTemplate } from '@cdktn/provider-awscc'

const iotfleetwiseStateTemplateConfig: iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#name IotfleetwiseStateTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.signalCatalogArn">signalCatalogArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn IotfleetwiseStateTemplate#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.stateTemplateProperties">stateTemplateProperties</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#state_template_properties IotfleetwiseStateTemplate#state_template_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dataExtraDimensions">dataExtraDimensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions IotfleetwiseStateTemplate#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#description IotfleetwiseStateTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.metadataExtraDimensions">metadataExtraDimensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions IotfleetwiseStateTemplate#metadata_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#tags IotfleetwiseStateTemplate#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#name IotfleetwiseStateTemplate#name}.

---

##### `signalCatalogArn`<sup>Required</sup> <a name="signalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.signalCatalogArn"></a>

```typescript
public readonly signalCatalogArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn IotfleetwiseStateTemplate#signal_catalog_arn}.

---

##### `stateTemplateProperties`<sup>Required</sup> <a name="stateTemplateProperties" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.stateTemplateProperties"></a>

```typescript
public readonly stateTemplateProperties: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#state_template_properties IotfleetwiseStateTemplate#state_template_properties}.

---

##### `dataExtraDimensions`<sup>Optional</sup> <a name="dataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dataExtraDimensions"></a>

```typescript
public readonly dataExtraDimensions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions IotfleetwiseStateTemplate#data_extra_dimensions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#description IotfleetwiseStateTemplate#description}.

---

##### `metadataExtraDimensions`<sup>Optional</sup> <a name="metadataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.metadataExtraDimensions"></a>

```typescript
public readonly metadataExtraDimensions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions IotfleetwiseStateTemplate#metadata_extra_dimensions}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotfleetwiseStateTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#tags IotfleetwiseStateTemplate#tags}.

---

### IotfleetwiseStateTemplateTags <a name="IotfleetwiseStateTemplateTags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.Initializer"></a>

```typescript
import { iotfleetwiseStateTemplate } from '@cdktn/provider-awscc'

const iotfleetwiseStateTemplateTags: iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#key IotfleetwiseStateTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#value IotfleetwiseStateTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#key IotfleetwiseStateTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#value IotfleetwiseStateTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseStateTemplateTagsList <a name="IotfleetwiseStateTemplateTagsList" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer"></a>

```typescript
import { iotfleetwiseStateTemplate } from '@cdktn/provider-awscc'

new iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get"></a>

```typescript
public get(index: number): IotfleetwiseStateTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseStateTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>[]

---


### IotfleetwiseStateTemplateTagsOutputReference <a name="IotfleetwiseStateTemplateTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer"></a>

```typescript
import { iotfleetwiseStateTemplate } from '@cdktn/provider-awscc'

new iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotfleetwiseStateTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags">IotfleetwiseStateTemplateTags</a>

---



