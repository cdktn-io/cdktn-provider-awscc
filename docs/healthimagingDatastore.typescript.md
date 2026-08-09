# `healthimagingDatastore` Submodule <a name="`healthimagingDatastore` Submodule" id="@cdktn/provider-awscc.healthimagingDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthimagingDatastore <a name="HealthimagingDatastore" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthimaging_datastore awscc_healthimaging_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.Initializer"></a>

```typescript
import { healthimagingDatastore } from '@cdktn/provider-awscc'

new healthimagingDatastore.HealthimagingDatastore(scope: Construct, id: string, config?: HealthimagingDatastoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig">HealthimagingDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig">HealthimagingDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.resetDatastoreName">resetDatastoreName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDatastoreName` <a name="resetDatastoreName" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.resetDatastoreName"></a>

```typescript
public resetDatastoreName(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HealthimagingDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.isConstruct"></a>

```typescript
import { healthimagingDatastore } from '@cdktn/provider-awscc'

healthimagingDatastore.HealthimagingDatastore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.isTerraformElement"></a>

```typescript
import { healthimagingDatastore } from '@cdktn/provider-awscc'

healthimagingDatastore.HealthimagingDatastore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.isTerraformResource"></a>

```typescript
import { healthimagingDatastore } from '@cdktn/provider-awscc'

healthimagingDatastore.HealthimagingDatastore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.generateConfigForImport"></a>

```typescript
import { healthimagingDatastore } from '@cdktn/provider-awscc'

healthimagingDatastore.HealthimagingDatastore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a HealthimagingDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthimagingDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthimagingDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthimaging_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HealthimagingDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.datastoreArn">datastoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.datastoreId">datastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.datastoreStatus">datastoreStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.datastoreNameInput">datastoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.datastoreName">datastoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `datastoreArn`<sup>Required</sup> <a name="datastoreArn" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.datastoreArn"></a>

```typescript
public readonly datastoreArn: string;
```

- *Type:* string

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

---

##### `datastoreStatus`<sup>Required</sup> <a name="datastoreStatus" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.datastoreStatus"></a>

```typescript
public readonly datastoreStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `datastoreNameInput`<sup>Optional</sup> <a name="datastoreNameInput" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.datastoreNameInput"></a>

```typescript
public readonly datastoreNameInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `datastoreName`<sup>Required</sup> <a name="datastoreName" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.datastoreName"></a>

```typescript
public readonly datastoreName: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthimagingDatastoreConfig <a name="HealthimagingDatastoreConfig" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.Initializer"></a>

```typescript
import { healthimagingDatastore } from '@cdktn/provider-awscc'

const healthimagingDatastoreConfig: healthimagingDatastore.HealthimagingDatastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.datastoreName">datastoreName</a></code> | <code>string</code> | User friendly name for Datastore. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | ARN referencing a KMS key or KMS key alias. |
| <code><a href="#@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A Map of key value pairs for Tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datastoreName`<sup>Optional</sup> <a name="datastoreName" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.datastoreName"></a>

```typescript
public readonly datastoreName: string;
```

- *Type:* string

User friendly name for Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthimaging_datastore#datastore_name HealthimagingDatastore#datastore_name}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

ARN referencing a KMS key or KMS key alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthimaging_datastore#kms_key_arn HealthimagingDatastore#kms_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.healthimagingDatastore.HealthimagingDatastoreConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A Map of key value pairs for Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthimaging_datastore#tags HealthimagingDatastore#tags}

---



