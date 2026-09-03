# `ec2CapacityManagerDataExport` Submodule <a name="`ec2CapacityManagerDataExport` Submodule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityManagerDataExport <a name="Ec2CapacityManagerDataExport" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_manager_data_export awscc_ec2_capacity_manager_data_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer"></a>

```typescript
import { ec2CapacityManagerDataExport } from '@cdktn/provider-awscc'

new ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport(scope: Construct, id: string, config: Ec2CapacityManagerDataExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig">Ec2CapacityManagerDataExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig">Ec2CapacityManagerDataExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetS3BucketPrefix">resetS3BucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2CapacityManagerDataExportTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>[]

---

##### `resetS3BucketPrefix` <a name="resetS3BucketPrefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetS3BucketPrefix"></a>

```typescript
public resetS3BucketPrefix(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2CapacityManagerDataExport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isConstruct"></a>

```typescript
import { ec2CapacityManagerDataExport } from '@cdktn/provider-awscc'

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformElement"></a>

```typescript
import { ec2CapacityManagerDataExport } from '@cdktn/provider-awscc'

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformResource"></a>

```typescript
import { ec2CapacityManagerDataExport } from '@cdktn/provider-awscc'

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport"></a>

```typescript
import { ec2CapacityManagerDataExport } from '@cdktn/provider-awscc'

ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2CapacityManagerDataExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2CapacityManagerDataExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2CapacityManagerDataExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_manager_data_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CapacityManagerDataExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.capacityManagerDataExportId">capacityManagerDataExportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList">Ec2CapacityManagerDataExportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefixInput">s3BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefix">s3BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacityManagerDataExportId`<sup>Required</sup> <a name="capacityManagerDataExportId" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.capacityManagerDataExportId"></a>

```typescript
public readonly capacityManagerDataExportId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tags"></a>

```typescript
public readonly tags: Ec2CapacityManagerDataExportTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList">Ec2CapacityManagerDataExportTagsList</a>

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3BucketPrefixInput`<sup>Optional</sup> <a name="s3BucketPrefixInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefixInput"></a>

```typescript
public readonly s3BucketPrefixInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2CapacityManagerDataExportTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>[]

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3BucketPrefix`<sup>Required</sup> <a name="s3BucketPrefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.s3BucketPrefix"></a>

```typescript
public readonly s3BucketPrefix: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityManagerDataExportConfig <a name="Ec2CapacityManagerDataExportConfig" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.Initializer"></a>

```typescript
import { ec2CapacityManagerDataExport } from '@cdktn/provider-awscc'

const ec2CapacityManagerDataExportConfig: ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.outputFormat">outputFormat</a></code> | <code>string</code> | The format of the exported capacity manager data. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | The name of the Amazon S3 bucket where the capacity manager data export will be stored. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.schedule">schedule</a></code> | <code>string</code> | The schedule for the capacity manager data export. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketPrefix">s3BucketPrefix</a></code> | <code>string</code> | The prefix for the S3 bucket location where exported files will be placed. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>[]</code> | An array of key-value pairs to apply to the capacity manager data export. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

The format of the exported capacity manager data.

Choose 'csv' for comma-separated values or 'parquet' for optimized columnar storage format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_manager_data_export#output_format Ec2CapacityManagerDataExport#output_format}

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

The name of the Amazon S3 bucket where the capacity manager data export will be stored.

The bucket must exist and be accessible by EC2 Capacity Manager service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_manager_data_export#s3_bucket_name Ec2CapacityManagerDataExport#s3_bucket_name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

The schedule for the capacity manager data export.

Currently supports hourly exports that provide periodic snapshots of capacity manager data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_manager_data_export#schedule Ec2CapacityManagerDataExport#schedule}

---

##### `s3BucketPrefix`<sup>Optional</sup> <a name="s3BucketPrefix" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.s3BucketPrefix"></a>

```typescript
public readonly s3BucketPrefix: string;
```

- *Type:* string

The prefix for the S3 bucket location where exported files will be placed.

If not specified, files will be placed in the root of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_manager_data_export#s3_bucket_prefix Ec2CapacityManagerDataExport#s3_bucket_prefix}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2CapacityManagerDataExportTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>[]

An array of key-value pairs to apply to the capacity manager data export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_manager_data_export#tags Ec2CapacityManagerDataExport#tags}

---

### Ec2CapacityManagerDataExportTags <a name="Ec2CapacityManagerDataExportTags" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.Initializer"></a>

```typescript
import { ec2CapacityManagerDataExport } from '@cdktn/provider-awscc'

const ec2CapacityManagerDataExportTags: ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_manager_data_export#key Ec2CapacityManagerDataExport#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_capacity_manager_data_export#value Ec2CapacityManagerDataExport#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityManagerDataExportTagsList <a name="Ec2CapacityManagerDataExportTagsList" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer"></a>

```typescript
import { ec2CapacityManagerDataExport } from '@cdktn/provider-awscc'

new ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.get"></a>

```typescript
public get(index: number): Ec2CapacityManagerDataExportTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2CapacityManagerDataExportTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>[]

---


### Ec2CapacityManagerDataExportTagsOutputReference <a name="Ec2CapacityManagerDataExportTagsOutputReference" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer"></a>

```typescript
import { ec2CapacityManagerDataExport } from '@cdktn/provider-awscc'

new ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2CapacityManagerDataExportTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CapacityManagerDataExport.Ec2CapacityManagerDataExportTags">Ec2CapacityManagerDataExportTags</a>

---



