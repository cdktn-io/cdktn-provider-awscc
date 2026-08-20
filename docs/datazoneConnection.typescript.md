# `datazoneConnection` Submodule <a name="`datazoneConnection` Submodule" id="@cdktn/provider-awscc.datazoneConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneConnection <a name="DatazoneConnection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection awscc_datazone_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnection(scope: Construct, id: string, config: DatazoneConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig">DatazoneConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig">DatazoneConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation">putAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations">putConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps">putProps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetAwsLocation">resetAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnableTrustedIdentityPropagation">resetEnableTrustedIdentityPropagation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnvironmentIdentifier">resetEnvironmentIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProjectIdentifier">resetProjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProps">resetProps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsLocation` <a name="putAwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation"></a>

```typescript
public putAwsLocation(value: DatazoneConnectionAwsLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---

##### `putConfigurations` <a name="putConfigurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations"></a>

```typescript
public putConfigurations(value: IResolvable | DatazoneConnectionConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]

---

##### `putProps` <a name="putProps" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps"></a>

```typescript
public putProps(value: DatazoneConnectionProps): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---

##### `resetAwsLocation` <a name="resetAwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetAwsLocation"></a>

```typescript
public resetAwsLocation(): void
```

##### `resetConfigurations` <a name="resetConfigurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetConfigurations"></a>

```typescript
public resetConfigurations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableTrustedIdentityPropagation` <a name="resetEnableTrustedIdentityPropagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnableTrustedIdentityPropagation"></a>

```typescript
public resetEnableTrustedIdentityPropagation(): void
```

##### `resetEnvironmentIdentifier` <a name="resetEnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnvironmentIdentifier"></a>

```typescript
public resetEnvironmentIdentifier(): void
```

##### `resetProjectIdentifier` <a name="resetProjectIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProjectIdentifier"></a>

```typescript
public resetProjectIdentifier(): void
```

##### `resetProps` <a name="resetProps" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProps"></a>

```typescript
public resetProps(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetScope"></a>

```typescript
public resetScope(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

datazoneConnection.DatazoneConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

datazoneConnection.DatazoneConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

datazoneConnection.DatazoneConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

datazoneConnection.DatazoneConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatazoneConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocation">awsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference">DatazoneConnectionAwsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurations">configurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList">DatazoneConnectionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainUnitId">domainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentUserRole">environmentUserRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference">DatazoneConnectionPropsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocationInput">awsLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurationsInput">configurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagationInput">enableTrustedIdentityPropagationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifierInput">projectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.propsInput">propsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagation">enableTrustedIdentityPropagation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsLocation`<sup>Required</sup> <a name="awsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocation"></a>

```typescript
public readonly awsLocation: DatazoneConnectionAwsLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference">DatazoneConnectionAwsLocationOutputReference</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurations"></a>

```typescript
public readonly configurations: DatazoneConnectionConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList">DatazoneConnectionConfigurationsList</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainUnitId"></a>

```typescript
public readonly domainUnitId: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `environmentUserRole`<sup>Required</sup> <a name="environmentUserRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentUserRole"></a>

```typescript
public readonly environmentUserRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.props"></a>

```typescript
public readonly props: DatazoneConnectionPropsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference">DatazoneConnectionPropsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `awsLocationInput`<sup>Optional</sup> <a name="awsLocationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocationInput"></a>

```typescript
public readonly awsLocationInput: IResolvable | DatazoneConnectionAwsLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurationsInput"></a>

```typescript
public readonly configurationsInput: IResolvable | DatazoneConnectionConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `enableTrustedIdentityPropagationInput`<sup>Optional</sup> <a name="enableTrustedIdentityPropagationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagationInput"></a>

```typescript
public readonly enableTrustedIdentityPropagationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifierInput"></a>

```typescript
public readonly environmentIdentifierInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdentifierInput`<sup>Optional</sup> <a name="projectIdentifierInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifierInput"></a>

```typescript
public readonly projectIdentifierInput: string;
```

- *Type:* string

---

##### `propsInput`<sup>Optional</sup> <a name="propsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.propsInput"></a>

```typescript
public readonly propsInput: IResolvable | DatazoneConnectionProps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `enableTrustedIdentityPropagation`<sup>Required</sup> <a name="enableTrustedIdentityPropagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagation"></a>

```typescript
public readonly enableTrustedIdentityPropagation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneConnectionAwsLocation <a name="DatazoneConnectionAwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionAwsLocation: datazoneConnection.DatazoneConnectionAwsLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.accessRole">accessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#access_role DatazoneConnection#access_role}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_account_id DatazoneConnection#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsRegion">awsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_region DatazoneConnection#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.iamConnectionId">iamConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#iam_connection_id DatazoneConnection#iam_connection_id}. |

---

##### `accessRole`<sup>Optional</sup> <a name="accessRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.accessRole"></a>

```typescript
public readonly accessRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#access_role DatazoneConnection#access_role}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_account_id DatazoneConnection#aws_account_id}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_region DatazoneConnection#aws_region}.

---

##### `iamConnectionId`<sup>Optional</sup> <a name="iamConnectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.iamConnectionId"></a>

```typescript
public readonly iamConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#iam_connection_id DatazoneConnection#iam_connection_id}.

---

### DatazoneConnectionConfig <a name="DatazoneConnectionConfig" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionConfig: datazoneConnection.DatazoneConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The identifier of the domain in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.name">name</a></code> | <code>string</code> | The name of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.awsLocation">awsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | AWS Location of project. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.configurations">configurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]</code> | The configurations of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.description">description</a></code> | <code>string</code> | The description of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.enableTrustedIdentityPropagation">enableTrustedIdentityPropagation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the trusted identity propagation is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | The identifier of the environment in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | The identifier of the project in which the connection should be created. If. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#props DatazoneConnection#props}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.scope">scope</a></code> | <code>string</code> | The scope of the connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The identifier of the domain in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#domain_identifier DatazoneConnection#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#name DatazoneConnection#name}

---

##### `awsLocation`<sup>Optional</sup> <a name="awsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.awsLocation"></a>

```typescript
public readonly awsLocation: DatazoneConnectionAwsLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

AWS Location of project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_location DatazoneConnection#aws_location}

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.configurations"></a>

```typescript
public readonly configurations: IResolvable | DatazoneConnectionConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]

The configurations of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#configurations DatazoneConnection#configurations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#description DatazoneConnection#description}

---

##### `enableTrustedIdentityPropagation`<sup>Optional</sup> <a name="enableTrustedIdentityPropagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.enableTrustedIdentityPropagation"></a>

```typescript
public readonly enableTrustedIdentityPropagation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the trusted identity propagation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#enable_trusted_identity_propagation DatazoneConnection#enable_trusted_identity_propagation}

---

##### `environmentIdentifier`<sup>Optional</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

The identifier of the environment in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#environment_identifier DatazoneConnection#environment_identifier}

---

##### `projectIdentifier`<sup>Optional</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

The identifier of the project in which the connection should be created. If.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#project_identifier DatazoneConnection#project_identifier}

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.props"></a>

```typescript
public readonly props: DatazoneConnectionProps;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#props DatazoneConnection#props}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#scope DatazoneConnection#scope}

---

### DatazoneConnectionConfigurations <a name="DatazoneConnectionConfigurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionConfigurations: datazoneConnection.DatazoneConnectionConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.classification">classification</a></code> | <code>string</code> | The classification of the connection configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Property Map. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

The classification of the connection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#classification DatazoneConnection#classification}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#properties DatazoneConnection#properties}

---

### DatazoneConnectionProps <a name="DatazoneConnectionProps" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionProps: datazoneConnection.DatazoneConnectionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.amazonQProperties">amazonQProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | Amazon Q properties of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.athenaProperties">athenaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | Athena Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.glueProperties">glueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | Glue Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.hyperPodProperties">hyperPodProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | HyperPod Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.iamProperties">iamProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | IAM Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.lakehouseProperties">lakehouseProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | Lakehouse Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.mlflowProperties">mlflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | MLflow Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.redshiftProperties">redshiftProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | Redshift Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.s3Properties">s3Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | S3 Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkEmrProperties">sparkEmrProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | Spark EMR Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkGlueProperties">sparkGlueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | Spark Glue Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsMwaaProperties">workflowsMwaaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | Workflows MWAA Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsServerlessProperties">workflowsServerlessProperties</a></code> | <code>string</code> | Workflows Serverless Properties Input. |

---

##### `amazonQProperties`<sup>Optional</sup> <a name="amazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.amazonQProperties"></a>

```typescript
public readonly amazonQProperties: DatazoneConnectionPropsAmazonQProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

Amazon Q properties of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#amazon_q_properties DatazoneConnection#amazon_q_properties}

---

##### `athenaProperties`<sup>Optional</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.athenaProperties"></a>

```typescript
public readonly athenaProperties: DatazoneConnectionPropsAthenaProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

Athena Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#athena_properties DatazoneConnection#athena_properties}

---

##### `glueProperties`<sup>Optional</sup> <a name="glueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.glueProperties"></a>

```typescript
public readonly glueProperties: DatazoneConnectionPropsGlueProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

Glue Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_properties DatazoneConnection#glue_properties}

---

##### `hyperPodProperties`<sup>Optional</sup> <a name="hyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.hyperPodProperties"></a>

```typescript
public readonly hyperPodProperties: DatazoneConnectionPropsHyperPodProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

HyperPod Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#hyper_pod_properties DatazoneConnection#hyper_pod_properties}

---

##### `iamProperties`<sup>Optional</sup> <a name="iamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.iamProperties"></a>

```typescript
public readonly iamProperties: DatazoneConnectionPropsIamProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

IAM Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#iam_properties DatazoneConnection#iam_properties}

---

##### `lakehouseProperties`<sup>Optional</sup> <a name="lakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.lakehouseProperties"></a>

```typescript
public readonly lakehouseProperties: DatazoneConnectionPropsLakehouseProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

Lakehouse Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#lakehouse_properties DatazoneConnection#lakehouse_properties}

---

##### `mlflowProperties`<sup>Optional</sup> <a name="mlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.mlflowProperties"></a>

```typescript
public readonly mlflowProperties: DatazoneConnectionPropsMlflowProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

MLflow Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#mlflow_properties DatazoneConnection#mlflow_properties}

---

##### `redshiftProperties`<sup>Optional</sup> <a name="redshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.redshiftProperties"></a>

```typescript
public readonly redshiftProperties: DatazoneConnectionPropsRedshiftProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

Redshift Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#redshift_properties DatazoneConnection#redshift_properties}

---

##### `s3Properties`<sup>Optional</sup> <a name="s3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.s3Properties"></a>

```typescript
public readonly s3Properties: DatazoneConnectionPropsS3Properties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

S3 Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#s3_properties DatazoneConnection#s3_properties}

---

##### `sparkEmrProperties`<sup>Optional</sup> <a name="sparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkEmrProperties"></a>

```typescript
public readonly sparkEmrProperties: DatazoneConnectionPropsSparkEmrProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

Spark EMR Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#spark_emr_properties DatazoneConnection#spark_emr_properties}

---

##### `sparkGlueProperties`<sup>Optional</sup> <a name="sparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkGlueProperties"></a>

```typescript
public readonly sparkGlueProperties: DatazoneConnectionPropsSparkGlueProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

Spark Glue Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#spark_glue_properties DatazoneConnection#spark_glue_properties}

---

##### `workflowsMwaaProperties`<sup>Optional</sup> <a name="workflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsMwaaProperties"></a>

```typescript
public readonly workflowsMwaaProperties: DatazoneConnectionPropsWorkflowsMwaaProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

Workflows MWAA Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workflows_mwaa_properties DatazoneConnection#workflows_mwaa_properties}

---

##### `workflowsServerlessProperties`<sup>Optional</sup> <a name="workflowsServerlessProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsServerlessProperties"></a>

```typescript
public readonly workflowsServerlessProperties: string;
```

- *Type:* string

Workflows Serverless Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workflows_serverless_properties DatazoneConnection#workflows_serverless_properties}

---

### DatazoneConnectionPropsAmazonQProperties <a name="DatazoneConnectionPropsAmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsAmazonQProperties: datazoneConnection.DatazoneConnectionPropsAmazonQProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.authMode">authMode</a></code> | <code>string</code> | The authentication mode of the connection's AmazonQ properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether Amazon Q is enabled for the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.profileArn">profileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#profile_arn DatazoneConnection#profile_arn}. |

---

##### `authMode`<sup>Optional</sup> <a name="authMode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.authMode"></a>

```typescript
public readonly authMode: string;
```

- *Type:* string

The authentication mode of the connection's AmazonQ properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#auth_mode DatazoneConnection#auth_mode}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether Amazon Q is enabled for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#is_enabled DatazoneConnection#is_enabled}

---

##### `profileArn`<sup>Optional</sup> <a name="profileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.profileArn"></a>

```typescript
public readonly profileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#profile_arn DatazoneConnection#profile_arn}.

---

### DatazoneConnectionPropsAthenaProperties <a name="DatazoneConnectionPropsAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsAthenaProperties: datazoneConnection.DatazoneConnectionPropsAthenaProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.property.workgroupName">workgroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}. |

---

##### `workgroupName`<sup>Optional</sup> <a name="workgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}.

---

### DatazoneConnectionPropsGlueProperties <a name="DatazoneConnectionPropsGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsGlueProperties: datazoneConnection.DatazoneConnectionPropsGlueProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.property.glueConnectionInput">glueConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | Glue Connection Input. |

---

##### `glueConnectionInput`<sup>Optional</sup> <a name="glueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.property.glueConnectionInput"></a>

```typescript
public readonly glueConnectionInput: DatazoneConnectionPropsGluePropertiesGlueConnectionInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

Glue Connection Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_connection_input DatazoneConnection#glue_connection_input}

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInput <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsGluePropertiesGlueConnectionInput: datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.athenaProperties">athenaProperties</a></code> | <code>{[ key: string ]: string}</code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | Authentication Configuration Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionProperties">connectionProperties</a></code> | <code>{[ key: string ]: string}</code> | Connection Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionType">connectionType</a></code> | <code>string</code> | Glue Connection Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#description DatazoneConnection#description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.matchCriteria">matchCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#match_criteria DatazoneConnection#match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#name DatazoneConnection#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | Physical Connection Requirements. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.pythonProperties">pythonProperties</a></code> | <code>{[ key: string ]: string}</code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.sparkProperties">sparkProperties</a></code> | <code>{[ key: string ]: string}</code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateCredentials">validateCredentials</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#validate_credentials DatazoneConnection#validate_credentials}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateForComputeEnvironments">validateForComputeEnvironments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#validate_for_compute_environments DatazoneConnection#validate_for_compute_environments}. |

---

##### `athenaProperties`<sup>Optional</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.athenaProperties"></a>

```typescript
public readonly athenaProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#athena_properties DatazoneConnection#athena_properties}

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

Authentication Configuration Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authentication_configuration DatazoneConnection#authentication_configuration}

---

##### `connectionProperties`<sup>Optional</sup> <a name="connectionProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionProperties"></a>

```typescript
public readonly connectionProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Connection Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection_properties DatazoneConnection#connection_properties}

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Glue Connection Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection_type DatazoneConnection#connection_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#description DatazoneConnection#description}.

---

##### `matchCriteria`<sup>Optional</sup> <a name="matchCriteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.matchCriteria"></a>

```typescript
public readonly matchCriteria: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#match_criteria DatazoneConnection#match_criteria}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#name DatazoneConnection#name}.

---

##### `physicalConnectionRequirements`<sup>Optional</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.physicalConnectionRequirements"></a>

```typescript
public readonly physicalConnectionRequirements: DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

Physical Connection Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#physical_connection_requirements DatazoneConnection#physical_connection_requirements}

---

##### `pythonProperties`<sup>Optional</sup> <a name="pythonProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.pythonProperties"></a>

```typescript
public readonly pythonProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_properties DatazoneConnection#python_properties}

---

##### `sparkProperties`<sup>Optional</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.sparkProperties"></a>

```typescript
public readonly sparkProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#spark_properties DatazoneConnection#spark_properties}

---

##### `validateCredentials`<sup>Optional</sup> <a name="validateCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateCredentials"></a>

```typescript
public readonly validateCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#validate_credentials DatazoneConnection#validate_credentials}.

---

##### `validateForComputeEnvironments`<sup>Optional</sup> <a name="validateForComputeEnvironments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateForComputeEnvironments"></a>

```typescript
public readonly validateForComputeEnvironments: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#validate_for_compute_environments DatazoneConnection#validate_for_compute_environments}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration: datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.authenticationType">authenticationType</a></code> | <code>string</code> | Authentication Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials">basicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | Basic Authentication Credentials. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials">customAuthenticationCredentials</a></code> | <code>{[ key: string ]: string}</code> | Credential Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#kms_key_arn DatazoneConnection#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.oAuth2Properties">oAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | OAuth2 Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}. |

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Authentication Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authentication_type DatazoneConnection#authentication_type}

---

##### `basicAuthenticationCredentials`<sup>Optional</sup> <a name="basicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```typescript
public readonly basicAuthenticationCredentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

Basic Authentication Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#basic_authentication_credentials DatazoneConnection#basic_authentication_credentials}

---

##### `customAuthenticationCredentials`<sup>Optional</sup> <a name="customAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```typescript
public readonly customAuthenticationCredentials: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Credential Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#custom_authentication_credentials DatazoneConnection#custom_authentication_credentials}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#kms_key_arn DatazoneConnection#kms_key_arn}.

---

##### `oAuth2Properties`<sup>Optional</sup> <a name="oAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.oAuth2Properties"></a>

```typescript
public readonly oAuth2Properties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

OAuth2 Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_properties DatazoneConnection#o_auth_2_properties}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials: datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#password DatazoneConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_name DatazoneConnection#user_name}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#password DatazoneConnection#password}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_name DatazoneConnection#user_name}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties: datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties">authorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | Authorization Code Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication">oAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | OAuth2 Client Application. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials">oAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | Glue OAuth2 Credentials. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType">oAuth2GrantType</a></code> | <code>string</code> | OAuth2 Grant Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#token_url DatazoneConnection#token_url}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap">tokenUrlParametersMap</a></code> | <code>{[ key: string ]: string}</code> | The token URL parameters. |

---

##### `authorizationCodeProperties`<sup>Optional</sup> <a name="authorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties"></a>

```typescript
public readonly authorizationCodeProperties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

Authorization Code Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authorization_code_properties DatazoneConnection#authorization_code_properties}

---

##### `oAuth2ClientApplication`<sup>Optional</sup> <a name="oAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication"></a>

```typescript
public readonly oAuth2ClientApplication: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

OAuth2 Client Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_client_application DatazoneConnection#o_auth_2_client_application}

---

##### `oAuth2Credentials`<sup>Optional</sup> <a name="oAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials"></a>

```typescript
public readonly oAuth2Credentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

Glue OAuth2 Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_credentials DatazoneConnection#o_auth_2_credentials}

---

##### `oAuth2GrantType`<sup>Optional</sup> <a name="oAuth2GrantType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType"></a>

```typescript
public readonly oAuth2GrantType: string;
```

- *Type:* string

OAuth2 Grant Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_grant_type DatazoneConnection#o_auth_2_grant_type}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#token_url DatazoneConnection#token_url}.

---

##### `tokenUrlParametersMap`<sup>Optional</sup> <a name="tokenUrlParametersMap" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap"></a>

```typescript
public readonly tokenUrlParametersMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The token URL parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#token_url_parameters_map DatazoneConnection#token_url_parameters_map}

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties: datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode">authorizationCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authorization_code DatazoneConnection#authorization_code}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri">redirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#redirect_uri DatazoneConnection#redirect_uri}. |

---

##### `authorizationCode`<sup>Optional</sup> <a name="authorizationCode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```typescript
public readonly authorizationCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authorization_code DatazoneConnection#authorization_code}.

---

##### `redirectUri`<sup>Optional</sup> <a name="redirectUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#redirect_uri DatazoneConnection#redirect_uri}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication: datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference">awsManagedClientApplicationReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_managed_client_application_reference DatazoneConnection#aws_managed_client_application_reference}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId">userManagedClientApplicationClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_managed_client_application_client_id DatazoneConnection#user_managed_client_application_client_id}. |

---

##### `awsManagedClientApplicationReference`<sup>Optional</sup> <a name="awsManagedClientApplicationReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```typescript
public readonly awsManagedClientApplicationReference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_managed_client_application_reference DatazoneConnection#aws_managed_client_application_reference}.

---

##### `userManagedClientApplicationClientId`<sup>Optional</sup> <a name="userManagedClientApplicationClientId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```typescript
public readonly userManagedClientApplicationClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_managed_client_application_client_id DatazoneConnection#user_managed_client_application_client_id}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials: datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken">accessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#access_token DatazoneConnection#access_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken">jwtToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#jwt_token DatazoneConnection#jwt_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken">refreshToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#refresh_token DatazoneConnection#refresh_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret">userManagedClientApplicationClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_managed_client_application_client_secret DatazoneConnection#user_managed_client_application_client_secret}. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#access_token DatazoneConnection#access_token}.

---

##### `jwtToken`<sup>Optional</sup> <a name="jwtToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken"></a>

```typescript
public readonly jwtToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#jwt_token DatazoneConnection#jwt_token}.

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#refresh_token DatazoneConnection#refresh_token}.

---

##### `userManagedClientApplicationClientSecret`<sup>Optional</sup> <a name="userManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```typescript
public readonly userManagedClientApplicationClientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_managed_client_application_client_secret DatazoneConnection#user_managed_client_application_client_secret}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements: datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#availability_zone DatazoneConnection#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#security_group_id_list DatazoneConnection#security_group_id_list}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#subnet_id DatazoneConnection#subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetIdList">subnetIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#subnet_id_list DatazoneConnection#subnet_id_list}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#availability_zone DatazoneConnection#availability_zone}.

---

##### `securityGroupIdList`<sup>Optional</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#security_group_id_list DatazoneConnection#security_group_id_list}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#subnet_id DatazoneConnection#subnet_id}.

---

##### `subnetIdList`<sup>Optional</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetIdList"></a>

```typescript
public readonly subnetIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#subnet_id_list DatazoneConnection#subnet_id_list}.

---

### DatazoneConnectionPropsHyperPodProperties <a name="DatazoneConnectionPropsHyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsHyperPodProperties: datazoneConnection.DatazoneConnectionPropsHyperPodProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}. |

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}.

---

### DatazoneConnectionPropsIamProperties <a name="DatazoneConnectionPropsIamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsIamProperties: datazoneConnection.DatazoneConnectionPropsIamProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}. |

---

##### `glueLineageSyncEnabled`<sup>Optional</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.property.glueLineageSyncEnabled"></a>

```typescript
public readonly glueLineageSyncEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}.

---

### DatazoneConnectionPropsLakehouseProperties <a name="DatazoneConnectionPropsLakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsLakehouseProperties: datazoneConnection.DatazoneConnectionPropsLakehouseProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether Glue lineage sync is enabled for the lakehouse connection. |

---

##### `glueLineageSyncEnabled`<sup>Optional</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.property.glueLineageSyncEnabled"></a>

```typescript
public readonly glueLineageSyncEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether Glue lineage sync is enabled for the lakehouse connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}

---

### DatazoneConnectionPropsMlflowProperties <a name="DatazoneConnectionPropsMlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsMlflowProperties: datazoneConnection.DatazoneConnectionPropsMlflowProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.property.trackingServerArn">trackingServerArn</a></code> | <code>string</code> | The ARN of the MLflow tracking server. |

---

##### `trackingServerArn`<sup>Optional</sup> <a name="trackingServerArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.property.trackingServerArn"></a>

```typescript
public readonly trackingServerArn: string;
```

- *Type:* string

The ARN of the MLflow tracking server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#tracking_server_arn DatazoneConnection#tracking_server_arn}

---

### DatazoneConnectionPropsRedshiftProperties <a name="DatazoneConnectionPropsRedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsRedshiftProperties: datazoneConnection.DatazoneConnectionPropsRedshiftProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#credentials DatazoneConnection#credentials}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#database_name DatazoneConnection#database_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#host DatazoneConnection#host}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.lineageSync">lineageSync</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | Redshift Lineage Sync Configuration Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#port DatazoneConnection#port}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#storage DatazoneConnection#storage}. |

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.credentials"></a>

```typescript
public readonly credentials: DatazoneConnectionPropsRedshiftPropertiesCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#credentials DatazoneConnection#credentials}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#database_name DatazoneConnection#database_name}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#host DatazoneConnection#host}.

---

##### `lineageSync`<sup>Optional</sup> <a name="lineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.lineageSync"></a>

```typescript
public readonly lineageSync: DatazoneConnectionPropsRedshiftPropertiesLineageSync;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

Redshift Lineage Sync Configuration Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#lineage_sync DatazoneConnection#lineage_sync}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#port DatazoneConnection#port}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.storage"></a>

```typescript
public readonly storage: DatazoneConnectionPropsRedshiftPropertiesStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#storage DatazoneConnection#storage}.

---

### DatazoneConnectionPropsRedshiftPropertiesCredentials <a name="DatazoneConnectionPropsRedshiftPropertiesCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsRedshiftPropertiesCredentials: datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.usernamePassword">usernamePassword</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | The username and password to be used for authentication. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}.

---

##### `usernamePassword`<sup>Optional</sup> <a name="usernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.usernamePassword"></a>

```typescript
public readonly usernamePassword: DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

The username and password to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#username_password DatazoneConnection#username_password}

---

### DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword: datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#password DatazoneConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#username DatazoneConnection#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#password DatazoneConnection#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#username DatazoneConnection#username}.

---

### DatazoneConnectionPropsRedshiftPropertiesLineageSync <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsRedshiftPropertiesLineageSync: datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#enabled DatazoneConnection#enabled}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | Lineage Sync Schedule. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#enabled DatazoneConnection#enabled}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.schedule"></a>

```typescript
public readonly schedule: DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

Lineage Sync Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}

---

### DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule: datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.property.schedule">schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}.

---

### DatazoneConnectionPropsRedshiftPropertiesStorage <a name="DatazoneConnectionPropsRedshiftPropertiesStorage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsRedshiftPropertiesStorage: datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.workgroupName">workgroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}. |

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}.

---

##### `workgroupName`<sup>Optional</sup> <a name="workgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}.

---

### DatazoneConnectionPropsS3Properties <a name="DatazoneConnectionPropsS3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsS3Properties: datazoneConnection.DatazoneConnectionPropsS3Properties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.registerS3AccessGrantLocation">registerS3AccessGrantLocation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to register the S3 Access Grant location. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3AccessGrantLocationId">s3AccessGrantLocationId</a></code> | <code>string</code> | The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3Uri">s3Uri</a></code> | <code>string</code> | The Amazon S3 URI that's part of the Amazon S3 properties of a connection. |

---

##### `registerS3AccessGrantLocation`<sup>Optional</sup> <a name="registerS3AccessGrantLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.registerS3AccessGrantLocation"></a>

```typescript
public readonly registerS3AccessGrantLocation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to register the S3 Access Grant location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#register_s3_access_grant_location DatazoneConnection#register_s3_access_grant_location}

---

##### `s3AccessGrantLocationId`<sup>Optional</sup> <a name="s3AccessGrantLocationId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3AccessGrantLocationId"></a>

```typescript
public readonly s3AccessGrantLocationId: string;
```

- *Type:* string

The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#s3_access_grant_location_id DatazoneConnection#s3_access_grant_location_id}

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

The Amazon S3 URI that's part of the Amazon S3 properties of a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#s3_uri DatazoneConnection#s3_uri}

---

### DatazoneConnectionPropsSparkEmrProperties <a name="DatazoneConnectionPropsSparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsSparkEmrProperties: datazoneConnection.DatazoneConnectionPropsSparkEmrProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.computeArn">computeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#compute_arn DatazoneConnection#compute_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#instance_profile_arn DatazoneConnection#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.logUri">logUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#log_uri DatazoneConnection#log_uri}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.managedEndpointArn">managedEndpointArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#managed_endpoint_arn DatazoneConnection#managed_endpoint_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.runtimeRole">runtimeRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#runtime_role DatazoneConnection#runtime_role}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.trustedCertificatesS3Uri">trustedCertificatesS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#trusted_certificates_s3_uri DatazoneConnection#trusted_certificates_s3_uri}. |

---

##### `computeArn`<sup>Optional</sup> <a name="computeArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.computeArn"></a>

```typescript
public readonly computeArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#compute_arn DatazoneConnection#compute_arn}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#instance_profile_arn DatazoneConnection#instance_profile_arn}.

---

##### `javaVirtualEnv`<sup>Optional</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.javaVirtualEnv"></a>

```typescript
public readonly javaVirtualEnv: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}.

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#log_uri DatazoneConnection#log_uri}.

---

##### `managedEndpointArn`<sup>Optional</sup> <a name="managedEndpointArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.managedEndpointArn"></a>

```typescript
public readonly managedEndpointArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#managed_endpoint_arn DatazoneConnection#managed_endpoint_arn}.

---

##### `pythonVirtualEnv`<sup>Optional</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.pythonVirtualEnv"></a>

```typescript
public readonly pythonVirtualEnv: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}.

---

##### `runtimeRole`<sup>Optional</sup> <a name="runtimeRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.runtimeRole"></a>

```typescript
public readonly runtimeRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#runtime_role DatazoneConnection#runtime_role}.

---

##### `trustedCertificatesS3Uri`<sup>Optional</sup> <a name="trustedCertificatesS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.trustedCertificatesS3Uri"></a>

```typescript
public readonly trustedCertificatesS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#trusted_certificates_s3_uri DatazoneConnection#trusted_certificates_s3_uri}.

---

### DatazoneConnectionPropsSparkGlueProperties <a name="DatazoneConnectionPropsSparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsSparkGlueProperties: datazoneConnection.DatazoneConnectionPropsSparkGlueProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.additionalArgs">additionalArgs</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | Spark Glue Args. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_connection_name DatazoneConnection#glue_connection_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueVersion">glueVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_version DatazoneConnection#glue_version}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#idle_timeout DatazoneConnection#idle_timeout}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#number_of_workers DatazoneConnection#number_of_workers}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.workerType">workerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#worker_type DatazoneConnection#worker_type}. |

---

##### `additionalArgs`<sup>Optional</sup> <a name="additionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.additionalArgs"></a>

```typescript
public readonly additionalArgs: DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

Spark Glue Args.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#additional_args DatazoneConnection#additional_args}

---

##### `glueConnectionName`<sup>Optional</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_connection_name DatazoneConnection#glue_connection_name}.

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_version DatazoneConnection#glue_version}.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#idle_timeout DatazoneConnection#idle_timeout}.

---

##### `javaVirtualEnv`<sup>Optional</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.javaVirtualEnv"></a>

```typescript
public readonly javaVirtualEnv: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}.

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#number_of_workers DatazoneConnection#number_of_workers}.

---

##### `pythonVirtualEnv`<sup>Optional</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.pythonVirtualEnv"></a>

```typescript
public readonly pythonVirtualEnv: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}.

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#worker_type DatazoneConnection#worker_type}.

---

### DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs <a name="DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsSparkGluePropertiesAdditionalArgs: datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.property.connection">connection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection DatazoneConnection#connection}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection DatazoneConnection#connection}.

---

### DatazoneConnectionPropsWorkflowsMwaaProperties <a name="DatazoneConnectionPropsWorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

const datazoneConnectionPropsWorkflowsMwaaProperties: datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.property.mwaaEnvironmentName">mwaaEnvironmentName</a></code> | <code>string</code> | The name of the MWAA environment. |

---

##### `mwaaEnvironmentName`<sup>Optional</sup> <a name="mwaaEnvironmentName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.property.mwaaEnvironmentName"></a>

```typescript
public readonly mwaaEnvironmentName: string;
```

- *Type:* string

The name of the MWAA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#mwaa_environment_name DatazoneConnection#mwaa_environment_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneConnectionAwsLocationOutputReference <a name="DatazoneConnectionAwsLocationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionAwsLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAccessRole">resetAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetIamConnectionId">resetIamConnectionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessRole` <a name="resetAccessRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAccessRole"></a>

```typescript
public resetAccessRole(): void
```

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetIamConnectionId` <a name="resetIamConnectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetIamConnectionId"></a>

```typescript
public resetIamConnectionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRoleInput">accessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionIdInput">iamConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRole">accessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionId">iamConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRoleInput"></a>

```typescript
public readonly accessRoleInput: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `iamConnectionIdInput`<sup>Optional</sup> <a name="iamConnectionIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionIdInput"></a>

```typescript
public readonly iamConnectionIdInput: string;
```

- *Type:* string

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRole"></a>

```typescript
public readonly accessRole: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `iamConnectionId`<sup>Required</sup> <a name="iamConnectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionId"></a>

```typescript
public readonly iamConnectionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionAwsLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---


### DatazoneConnectionConfigurationsList <a name="DatazoneConnectionConfigurationsList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get"></a>

```typescript
public get(index: number): DatazoneConnectionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>[]

---


### DatazoneConnectionConfigurationsOutputReference <a name="DatazoneConnectionConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetClassification">resetClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassification` <a name="resetClassification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetClassification"></a>

```typescript
public resetClassification(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classificationInput">classificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classification">classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classificationInput"></a>

```typescript
public readonly classificationInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classification"></a>

```typescript
public readonly classification: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>

---


### DatazoneConnectionPropsAmazonQPropertiesOutputReference <a name="DatazoneConnectionPropsAmazonQPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetAuthMode">resetAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetProfileArn">resetProfileArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthMode` <a name="resetAuthMode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetAuthMode"></a>

```typescript
public resetAuthMode(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetProfileArn` <a name="resetProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetProfileArn"></a>

```typescript
public resetProfileArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authModeInput">authModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArnInput">profileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode">authMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn">profileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authModeInput`<sup>Optional</sup> <a name="authModeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authModeInput"></a>

```typescript
public readonly authModeInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileArnInput`<sup>Optional</sup> <a name="profileArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArnInput"></a>

```typescript
public readonly profileArnInput: string;
```

- *Type:* string

---

##### `authMode`<sup>Required</sup> <a name="authMode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode"></a>

```typescript
public readonly authMode: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn"></a>

```typescript
public readonly profileArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsAmazonQProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---


### DatazoneConnectionPropsAthenaPropertiesOutputReference <a name="DatazoneConnectionPropsAthenaPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resetWorkgroupName">resetWorkgroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkgroupName` <a name="resetWorkgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resetWorkgroupName"></a>

```typescript
public resetWorkgroupName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupNameInput">workgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName">workgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupNameInput"></a>

```typescript
public readonly workgroupNameInput: string;
```

- *Type:* string

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsAthenaProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode">resetAuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri">resetRedirectUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationCode` <a name="resetAuthorizationCode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode"></a>

```typescript
public resetAuthorizationCode(): void
```

##### `resetRedirectUri` <a name="resetRedirectUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri"></a>

```typescript
public resetRedirectUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">authorizationCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">authorizationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">redirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationCodeInput`<sup>Optional</sup> <a name="authorizationCodeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```typescript
public readonly authorizationCodeInput: string;
```

- *Type:* string

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```typescript
public readonly redirectUriInput: string;
```

- *Type:* string

---

##### `authorizationCode`<sup>Required</sup> <a name="authorizationCode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```typescript
public readonly authorizationCode: string;
```

- *Type:* string

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">resetAwsManagedClientApplicationReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">resetUserManagedClientApplicationClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsManagedClientApplicationReference` <a name="resetAwsManagedClientApplicationReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```typescript
public resetAwsManagedClientApplicationReference(): void
```

##### `resetUserManagedClientApplicationClientId` <a name="resetUserManagedClientApplicationClientId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```typescript
public resetUserManagedClientApplicationClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">awsManagedClientApplicationReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">userManagedClientApplicationClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">awsManagedClientApplicationReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">userManagedClientApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsManagedClientApplicationReferenceInput`<sup>Optional</sup> <a name="awsManagedClientApplicationReferenceInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```typescript
public readonly awsManagedClientApplicationReferenceInput: string;
```

- *Type:* string

---

##### `userManagedClientApplicationClientIdInput`<sup>Optional</sup> <a name="userManagedClientApplicationClientIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```typescript
public readonly userManagedClientApplicationClientIdInput: string;
```

- *Type:* string

---

##### `awsManagedClientApplicationReference`<sup>Required</sup> <a name="awsManagedClientApplicationReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```typescript
public readonly awsManagedClientApplicationReference: string;
```

- *Type:* string

---

##### `userManagedClientApplicationClientId`<sup>Required</sup> <a name="userManagedClientApplicationClientId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```typescript
public readonly userManagedClientApplicationClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken">resetJwtToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">resetUserManagedClientApplicationClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetJwtToken` <a name="resetJwtToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken"></a>

```typescript
public resetJwtToken(): void
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken"></a>

```typescript
public resetRefreshToken(): void
```

##### `resetUserManagedClientApplicationClientSecret` <a name="resetUserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```typescript
public resetUserManagedClientApplicationClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput">jwtTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">userManagedClientApplicationClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">jwtToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">userManagedClientApplicationClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `jwtTokenInput`<sup>Optional</sup> <a name="jwtTokenInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput"></a>

```typescript
public readonly jwtTokenInput: string;
```

- *Type:* string

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput"></a>

```typescript
public readonly refreshTokenInput: string;
```

- *Type:* string

---

##### `userManagedClientApplicationClientSecretInput`<sup>Optional</sup> <a name="userManagedClientApplicationClientSecretInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```typescript
public readonly userManagedClientApplicationClientSecretInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `jwtToken`<sup>Required</sup> <a name="jwtToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```typescript
public readonly jwtToken: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

##### `userManagedClientApplicationClientSecret`<sup>Required</sup> <a name="userManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```typescript
public readonly userManagedClientApplicationClientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties">putAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication">putOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials">putOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties">resetAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication">resetOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials">resetOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType">resetOAuth2GrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap">resetTokenUrlParametersMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationCodeProperties` <a name="putAuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```typescript
public putAuthorizationCodeProperties(value: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `putOAuth2ClientApplication` <a name="putOAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication"></a>

```typescript
public putOAuth2ClientApplication(value: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `putOAuth2Credentials` <a name="putOAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials"></a>

```typescript
public putOAuth2Credentials(value: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `resetAuthorizationCodeProperties` <a name="resetAuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```typescript
public resetAuthorizationCodeProperties(): void
```

##### `resetOAuth2ClientApplication` <a name="resetOAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication"></a>

```typescript
public resetOAuth2ClientApplication(): void
```

##### `resetOAuth2Credentials` <a name="resetOAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials"></a>

```typescript
public resetOAuth2Credentials(): void
```

##### `resetOAuth2GrantType` <a name="resetOAuth2GrantType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType"></a>

```typescript
public resetOAuth2GrantType(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```

##### `resetTokenUrlParametersMap` <a name="resetTokenUrlParametersMap" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```typescript
public resetTokenUrlParametersMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">authorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">oAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">oAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput">authorizationCodePropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput">oAuth2ClientApplicationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput">oAuth2CredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput">oAuth2GrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput">tokenUrlParametersMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">oAuth2GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">tokenUrlParametersMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationCodeProperties`<sup>Required</sup> <a name="authorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```typescript
public readonly authorizationCodeProperties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `oAuth2ClientApplication`<sup>Required</sup> <a name="oAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```typescript
public readonly oAuth2ClientApplication: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `oAuth2Credentials`<sup>Required</sup> <a name="oAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```typescript
public readonly oAuth2Credentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `authorizationCodePropertiesInput`<sup>Optional</sup> <a name="authorizationCodePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```typescript
public readonly authorizationCodePropertiesInput: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `oAuth2ClientApplicationInput`<sup>Optional</sup> <a name="oAuth2ClientApplicationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput"></a>

```typescript
public readonly oAuth2ClientApplicationInput: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `oAuth2CredentialsInput`<sup>Optional</sup> <a name="oAuth2CredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput"></a>

```typescript
public readonly oAuth2CredentialsInput: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `oAuth2GrantTypeInput`<sup>Optional</sup> <a name="oAuth2GrantTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput"></a>

```typescript
public readonly oAuth2GrantTypeInput: string;
```

- *Type:* string

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `tokenUrlParametersMapInput`<sup>Optional</sup> <a name="tokenUrlParametersMapInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```typescript
public readonly tokenUrlParametersMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oAuth2GrantType`<sup>Required</sup> <a name="oAuth2GrantType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```typescript
public readonly oAuth2GrantType: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `tokenUrlParametersMap`<sup>Required</sup> <a name="tokenUrlParametersMap" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```typescript
public readonly tokenUrlParametersMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">putBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties">putOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">resetBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">resetCustomAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties">resetOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuthenticationCredentials` <a name="putBasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```typescript
public putBasicAuthenticationCredentials(value: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `putOAuth2Properties` <a name="putOAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties"></a>

```typescript
public putOAuth2Properties(value: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetBasicAuthenticationCredentials` <a name="resetBasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```typescript
public resetBasicAuthenticationCredentials(): void
```

##### `resetCustomAuthenticationCredentials` <a name="resetCustomAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```typescript
public resetCustomAuthenticationCredentials(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetOAuth2Properties` <a name="resetOAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties"></a>

```typescript
public resetOAuth2Properties(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">basicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">oAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">basicAuthenticationCredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">customAuthenticationCredentialsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput">oAuth2PropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">customAuthenticationCredentials</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuthenticationCredentials`<sup>Required</sup> <a name="basicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```typescript
public readonly basicAuthenticationCredentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `oAuth2Properties`<sup>Required</sup> <a name="oAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```typescript
public readonly oAuth2Properties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `basicAuthenticationCredentialsInput`<sup>Optional</sup> <a name="basicAuthenticationCredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```typescript
public readonly basicAuthenticationCredentialsInput: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `customAuthenticationCredentialsInput`<sup>Optional</sup> <a name="customAuthenticationCredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```typescript
public readonly customAuthenticationCredentialsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `oAuth2PropertiesInput`<sup>Optional</sup> <a name="oAuth2PropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput"></a>

```typescript
public readonly oAuth2PropertiesInput: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `customAuthenticationCredentials`<sup>Required</sup> <a name="customAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```typescript
public readonly customAuthenticationCredentials: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements">putPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAthenaProperties">resetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAuthenticationConfiguration">resetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionProperties">resetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetMatchCriteria">resetMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPhysicalConnectionRequirements">resetPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPythonProperties">resetPythonProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetSparkProperties">resetSparkProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateCredentials">resetValidateCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateForComputeEnvironments">resetValidateForComputeEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration"></a>

```typescript
public putAuthenticationConfiguration(value: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---

##### `putPhysicalConnectionRequirements` <a name="putPhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements"></a>

```typescript
public putPhysicalConnectionRequirements(value: DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---

##### `resetAthenaProperties` <a name="resetAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAthenaProperties"></a>

```typescript
public resetAthenaProperties(): void
```

##### `resetAuthenticationConfiguration` <a name="resetAuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAuthenticationConfiguration"></a>

```typescript
public resetAuthenticationConfiguration(): void
```

##### `resetConnectionProperties` <a name="resetConnectionProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionProperties"></a>

```typescript
public resetConnectionProperties(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetMatchCriteria` <a name="resetMatchCriteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetMatchCriteria"></a>

```typescript
public resetMatchCriteria(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPhysicalConnectionRequirements` <a name="resetPhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPhysicalConnectionRequirements"></a>

```typescript
public resetPhysicalConnectionRequirements(): void
```

##### `resetPythonProperties` <a name="resetPythonProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPythonProperties"></a>

```typescript
public resetPythonProperties(): void
```

##### `resetSparkProperties` <a name="resetSparkProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetSparkProperties"></a>

```typescript
public resetSparkProperties(): void
```

##### `resetValidateCredentials` <a name="resetValidateCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateCredentials"></a>

```typescript
public resetValidateCredentials(): void
```

##### `resetValidateForComputeEnvironments` <a name="resetValidateForComputeEnvironments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateForComputeEnvironments"></a>

```typescript
public resetValidateForComputeEnvironments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaPropertiesInput">athenaPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionPropertiesInput">connectionPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteriaInput">matchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirementsInput">physicalConnectionRequirementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonPropertiesInput">pythonPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkPropertiesInput">sparkPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentialsInput">validateCredentialsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironmentsInput">validateForComputeEnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties">athenaProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties">connectionProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria">matchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties">pythonProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties">sparkProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials">validateCredentials</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments">validateForComputeEnvironments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `physicalConnectionRequirements`<sup>Required</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```typescript
public readonly physicalConnectionRequirements: DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `athenaPropertiesInput`<sup>Optional</sup> <a name="athenaPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaPropertiesInput"></a>

```typescript
public readonly athenaPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfigurationInput"></a>

```typescript
public readonly authenticationConfigurationInput: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---

##### `connectionPropertiesInput`<sup>Optional</sup> <a name="connectionPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionPropertiesInput"></a>

```typescript
public readonly connectionPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `matchCriteriaInput`<sup>Optional</sup> <a name="matchCriteriaInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteriaInput"></a>

```typescript
public readonly matchCriteriaInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `physicalConnectionRequirementsInput`<sup>Optional</sup> <a name="physicalConnectionRequirementsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirementsInput"></a>

```typescript
public readonly physicalConnectionRequirementsInput: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---

##### `pythonPropertiesInput`<sup>Optional</sup> <a name="pythonPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonPropertiesInput"></a>

```typescript
public readonly pythonPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sparkPropertiesInput`<sup>Optional</sup> <a name="sparkPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkPropertiesInput"></a>

```typescript
public readonly sparkPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validateCredentialsInput`<sup>Optional</sup> <a name="validateCredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentialsInput"></a>

```typescript
public readonly validateCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `validateForComputeEnvironmentsInput`<sup>Optional</sup> <a name="validateForComputeEnvironmentsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironmentsInput"></a>

```typescript
public readonly validateForComputeEnvironmentsInput: string[];
```

- *Type:* string[]

---

##### `athenaProperties`<sup>Required</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties"></a>

```typescript
public readonly athenaProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionProperties`<sup>Required</sup> <a name="connectionProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties"></a>

```typescript
public readonly connectionProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria"></a>

```typescript
public readonly matchCriteria: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pythonProperties`<sup>Required</sup> <a name="pythonProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties"></a>

```typescript
public readonly pythonProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sparkProperties`<sup>Required</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties"></a>

```typescript
public readonly sparkProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validateCredentials`<sup>Required</sup> <a name="validateCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials"></a>

```typescript
public readonly validateCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `validateForComputeEnvironments`<sup>Required</sup> <a name="validateForComputeEnvironments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```typescript
public readonly validateForComputeEnvironments: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">resetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetIdList">resetSubnetIdList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetSecurityGroupIdList` <a name="resetSecurityGroupIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```typescript
public resetSecurityGroupIdList(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetSubnetIdList` <a name="resetSubnetIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetIdList"></a>

```typescript
public resetSubnetIdList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">securityGroupIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdListInput">subnetIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList">subnetIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `securityGroupIdListInput`<sup>Optional</sup> <a name="securityGroupIdListInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```typescript
public readonly securityGroupIdListInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetIdListInput`<sup>Optional</sup> <a name="subnetIdListInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdListInput"></a>

```typescript
public readonly subnetIdListInput: string[];
```

- *Type:* string[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subnetIdList`<sup>Required</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList"></a>

```typescript
public readonly subnetIdList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---


### DatazoneConnectionPropsGluePropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput">putGlueConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resetGlueConnectionInput">resetGlueConnectionInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlueConnectionInput` <a name="putGlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput"></a>

```typescript
public putGlueConnectionInput(value: DatazoneConnectionPropsGluePropertiesGlueConnectionInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---

##### `resetGlueConnectionInput` <a name="resetGlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resetGlueConnectionInput"></a>

```typescript
public resetGlueConnectionInput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput">glueConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInputInput">glueConnectionInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueConnectionInput`<sup>Required</sup> <a name="glueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput"></a>

```typescript
public readonly glueConnectionInput: DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a>

---

##### `glueConnectionInputInput`<sup>Optional</sup> <a name="glueConnectionInputInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInputInput"></a>

```typescript
public readonly glueConnectionInputInput: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsGlueProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---


### DatazoneConnectionPropsHyperPodPropertiesOutputReference <a name="DatazoneConnectionPropsHyperPodPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resetClusterName"></a>

```typescript
public resetClusterName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsHyperPodProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---


### DatazoneConnectionPropsIamPropertiesOutputReference <a name="DatazoneConnectionPropsIamPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resetGlueLineageSyncEnabled">resetGlueLineageSyncEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlueLineageSyncEnabled` <a name="resetGlueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resetGlueLineageSyncEnabled"></a>

```typescript
public resetGlueLineageSyncEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabledInput">glueLineageSyncEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueLineageSyncEnabledInput`<sup>Optional</sup> <a name="glueLineageSyncEnabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabledInput"></a>

```typescript
public readonly glueLineageSyncEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `glueLineageSyncEnabled`<sup>Required</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```typescript
public readonly glueLineageSyncEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsIamProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---


### DatazoneConnectionPropsLakehousePropertiesOutputReference <a name="DatazoneConnectionPropsLakehousePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resetGlueLineageSyncEnabled">resetGlueLineageSyncEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlueLineageSyncEnabled` <a name="resetGlueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resetGlueLineageSyncEnabled"></a>

```typescript
public resetGlueLineageSyncEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabledInput">glueLineageSyncEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueLineageSyncEnabledInput`<sup>Optional</sup> <a name="glueLineageSyncEnabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabledInput"></a>

```typescript
public readonly glueLineageSyncEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `glueLineageSyncEnabled`<sup>Required</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```typescript
public readonly glueLineageSyncEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsLakehouseProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---


### DatazoneConnectionPropsMlflowPropertiesOutputReference <a name="DatazoneConnectionPropsMlflowPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resetTrackingServerArn">resetTrackingServerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrackingServerArn` <a name="resetTrackingServerArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resetTrackingServerArn"></a>

```typescript
public resetTrackingServerArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArnInput">trackingServerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn">trackingServerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trackingServerArnInput`<sup>Optional</sup> <a name="trackingServerArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArnInput"></a>

```typescript
public readonly trackingServerArnInput: string;
```

- *Type:* string

---

##### `trackingServerArn`<sup>Required</sup> <a name="trackingServerArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn"></a>

```typescript
public readonly trackingServerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsMlflowProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---


### DatazoneConnectionPropsOutputReference <a name="DatazoneConnectionPropsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties">putAmazonQProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties">putAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties">putGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties">putHyperPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties">putIamProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties">putLakehouseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties">putMlflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties">putRedshiftProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties">putS3Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties">putSparkEmrProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties">putSparkGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties">putWorkflowsMwaaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAmazonQProperties">resetAmazonQProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAthenaProperties">resetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetGlueProperties">resetGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetHyperPodProperties">resetHyperPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetIamProperties">resetIamProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetLakehouseProperties">resetLakehouseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetMlflowProperties">resetMlflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetRedshiftProperties">resetRedshiftProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetS3Properties">resetS3Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkEmrProperties">resetSparkEmrProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkGlueProperties">resetSparkGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsMwaaProperties">resetWorkflowsMwaaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsServerlessProperties">resetWorkflowsServerlessProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonQProperties` <a name="putAmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties"></a>

```typescript
public putAmazonQProperties(value: DatazoneConnectionPropsAmazonQProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---

##### `putAthenaProperties` <a name="putAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties"></a>

```typescript
public putAthenaProperties(value: DatazoneConnectionPropsAthenaProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---

##### `putGlueProperties` <a name="putGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties"></a>

```typescript
public putGlueProperties(value: DatazoneConnectionPropsGlueProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---

##### `putHyperPodProperties` <a name="putHyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties"></a>

```typescript
public putHyperPodProperties(value: DatazoneConnectionPropsHyperPodProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---

##### `putIamProperties` <a name="putIamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties"></a>

```typescript
public putIamProperties(value: DatazoneConnectionPropsIamProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---

##### `putLakehouseProperties` <a name="putLakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties"></a>

```typescript
public putLakehouseProperties(value: DatazoneConnectionPropsLakehouseProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---

##### `putMlflowProperties` <a name="putMlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties"></a>

```typescript
public putMlflowProperties(value: DatazoneConnectionPropsMlflowProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---

##### `putRedshiftProperties` <a name="putRedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties"></a>

```typescript
public putRedshiftProperties(value: DatazoneConnectionPropsRedshiftProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---

##### `putS3Properties` <a name="putS3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties"></a>

```typescript
public putS3Properties(value: DatazoneConnectionPropsS3Properties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---

##### `putSparkEmrProperties` <a name="putSparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties"></a>

```typescript
public putSparkEmrProperties(value: DatazoneConnectionPropsSparkEmrProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---

##### `putSparkGlueProperties` <a name="putSparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties"></a>

```typescript
public putSparkGlueProperties(value: DatazoneConnectionPropsSparkGlueProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---

##### `putWorkflowsMwaaProperties` <a name="putWorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties"></a>

```typescript
public putWorkflowsMwaaProperties(value: DatazoneConnectionPropsWorkflowsMwaaProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---

##### `resetAmazonQProperties` <a name="resetAmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAmazonQProperties"></a>

```typescript
public resetAmazonQProperties(): void
```

##### `resetAthenaProperties` <a name="resetAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAthenaProperties"></a>

```typescript
public resetAthenaProperties(): void
```

##### `resetGlueProperties` <a name="resetGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetGlueProperties"></a>

```typescript
public resetGlueProperties(): void
```

##### `resetHyperPodProperties` <a name="resetHyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetHyperPodProperties"></a>

```typescript
public resetHyperPodProperties(): void
```

##### `resetIamProperties` <a name="resetIamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetIamProperties"></a>

```typescript
public resetIamProperties(): void
```

##### `resetLakehouseProperties` <a name="resetLakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetLakehouseProperties"></a>

```typescript
public resetLakehouseProperties(): void
```

##### `resetMlflowProperties` <a name="resetMlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetMlflowProperties"></a>

```typescript
public resetMlflowProperties(): void
```

##### `resetRedshiftProperties` <a name="resetRedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetRedshiftProperties"></a>

```typescript
public resetRedshiftProperties(): void
```

##### `resetS3Properties` <a name="resetS3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetS3Properties"></a>

```typescript
public resetS3Properties(): void
```

##### `resetSparkEmrProperties` <a name="resetSparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkEmrProperties"></a>

```typescript
public resetSparkEmrProperties(): void
```

##### `resetSparkGlueProperties` <a name="resetSparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkGlueProperties"></a>

```typescript
public resetSparkGlueProperties(): void
```

##### `resetWorkflowsMwaaProperties` <a name="resetWorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsMwaaProperties"></a>

```typescript
public resetWorkflowsMwaaProperties(): void
```

##### `resetWorkflowsServerlessProperties` <a name="resetWorkflowsServerlessProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsServerlessProperties"></a>

```typescript
public resetWorkflowsServerlessProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQProperties">amazonQProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference">DatazoneConnectionPropsAmazonQPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaProperties">athenaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference">DatazoneConnectionPropsAthenaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.glueProperties">glueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodProperties">hyperPodProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference">DatazoneConnectionPropsHyperPodPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamProperties">iamProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference">DatazoneConnectionPropsIamPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehouseProperties">lakehouseProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference">DatazoneConnectionPropsLakehousePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowProperties">mlflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference">DatazoneConnectionPropsMlflowPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftProperties">redshiftProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference">DatazoneConnectionPropsRedshiftPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3Properties">s3Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference">DatazoneConnectionPropsS3PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrProperties">sparkEmrProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference">DatazoneConnectionPropsSparkEmrPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGlueProperties">sparkGlueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference">DatazoneConnectionPropsSparkGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties">workflowsMwaaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQPropertiesInput">amazonQPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaPropertiesInput">athenaPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.gluePropertiesInput">gluePropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodPropertiesInput">hyperPodPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamPropertiesInput">iamPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehousePropertiesInput">lakehousePropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowPropertiesInput">mlflowPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftPropertiesInput">redshiftPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3PropertiesInput">s3PropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrPropertiesInput">sparkEmrPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGluePropertiesInput">sparkGluePropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaPropertiesInput">workflowsMwaaPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessPropertiesInput">workflowsServerlessPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties">workflowsServerlessProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonQProperties`<sup>Required</sup> <a name="amazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQProperties"></a>

```typescript
public readonly amazonQProperties: DatazoneConnectionPropsAmazonQPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference">DatazoneConnectionPropsAmazonQPropertiesOutputReference</a>

---

##### `athenaProperties`<sup>Required</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaProperties"></a>

```typescript
public readonly athenaProperties: DatazoneConnectionPropsAthenaPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference">DatazoneConnectionPropsAthenaPropertiesOutputReference</a>

---

##### `glueProperties`<sup>Required</sup> <a name="glueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.glueProperties"></a>

```typescript
public readonly glueProperties: DatazoneConnectionPropsGluePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesOutputReference</a>

---

##### `hyperPodProperties`<sup>Required</sup> <a name="hyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodProperties"></a>

```typescript
public readonly hyperPodProperties: DatazoneConnectionPropsHyperPodPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference">DatazoneConnectionPropsHyperPodPropertiesOutputReference</a>

---

##### `iamProperties`<sup>Required</sup> <a name="iamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamProperties"></a>

```typescript
public readonly iamProperties: DatazoneConnectionPropsIamPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference">DatazoneConnectionPropsIamPropertiesOutputReference</a>

---

##### `lakehouseProperties`<sup>Required</sup> <a name="lakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehouseProperties"></a>

```typescript
public readonly lakehouseProperties: DatazoneConnectionPropsLakehousePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference">DatazoneConnectionPropsLakehousePropertiesOutputReference</a>

---

##### `mlflowProperties`<sup>Required</sup> <a name="mlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowProperties"></a>

```typescript
public readonly mlflowProperties: DatazoneConnectionPropsMlflowPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference">DatazoneConnectionPropsMlflowPropertiesOutputReference</a>

---

##### `redshiftProperties`<sup>Required</sup> <a name="redshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftProperties"></a>

```typescript
public readonly redshiftProperties: DatazoneConnectionPropsRedshiftPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference">DatazoneConnectionPropsRedshiftPropertiesOutputReference</a>

---

##### `s3Properties`<sup>Required</sup> <a name="s3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3Properties"></a>

```typescript
public readonly s3Properties: DatazoneConnectionPropsS3PropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference">DatazoneConnectionPropsS3PropertiesOutputReference</a>

---

##### `sparkEmrProperties`<sup>Required</sup> <a name="sparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrProperties"></a>

```typescript
public readonly sparkEmrProperties: DatazoneConnectionPropsSparkEmrPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference">DatazoneConnectionPropsSparkEmrPropertiesOutputReference</a>

---

##### `sparkGlueProperties`<sup>Required</sup> <a name="sparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGlueProperties"></a>

```typescript
public readonly sparkGlueProperties: DatazoneConnectionPropsSparkGluePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference">DatazoneConnectionPropsSparkGluePropertiesOutputReference</a>

---

##### `workflowsMwaaProperties`<sup>Required</sup> <a name="workflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties"></a>

```typescript
public readonly workflowsMwaaProperties: DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a>

---

##### `amazonQPropertiesInput`<sup>Optional</sup> <a name="amazonQPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQPropertiesInput"></a>

```typescript
public readonly amazonQPropertiesInput: IResolvable | DatazoneConnectionPropsAmazonQProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---

##### `athenaPropertiesInput`<sup>Optional</sup> <a name="athenaPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaPropertiesInput"></a>

```typescript
public readonly athenaPropertiesInput: IResolvable | DatazoneConnectionPropsAthenaProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---

##### `gluePropertiesInput`<sup>Optional</sup> <a name="gluePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.gluePropertiesInput"></a>

```typescript
public readonly gluePropertiesInput: IResolvable | DatazoneConnectionPropsGlueProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---

##### `hyperPodPropertiesInput`<sup>Optional</sup> <a name="hyperPodPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodPropertiesInput"></a>

```typescript
public readonly hyperPodPropertiesInput: IResolvable | DatazoneConnectionPropsHyperPodProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---

##### `iamPropertiesInput`<sup>Optional</sup> <a name="iamPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamPropertiesInput"></a>

```typescript
public readonly iamPropertiesInput: IResolvable | DatazoneConnectionPropsIamProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---

##### `lakehousePropertiesInput`<sup>Optional</sup> <a name="lakehousePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehousePropertiesInput"></a>

```typescript
public readonly lakehousePropertiesInput: IResolvable | DatazoneConnectionPropsLakehouseProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---

##### `mlflowPropertiesInput`<sup>Optional</sup> <a name="mlflowPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowPropertiesInput"></a>

```typescript
public readonly mlflowPropertiesInput: IResolvable | DatazoneConnectionPropsMlflowProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---

##### `redshiftPropertiesInput`<sup>Optional</sup> <a name="redshiftPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftPropertiesInput"></a>

```typescript
public readonly redshiftPropertiesInput: IResolvable | DatazoneConnectionPropsRedshiftProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---

##### `s3PropertiesInput`<sup>Optional</sup> <a name="s3PropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3PropertiesInput"></a>

```typescript
public readonly s3PropertiesInput: IResolvable | DatazoneConnectionPropsS3Properties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---

##### `sparkEmrPropertiesInput`<sup>Optional</sup> <a name="sparkEmrPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrPropertiesInput"></a>

```typescript
public readonly sparkEmrPropertiesInput: IResolvable | DatazoneConnectionPropsSparkEmrProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---

##### `sparkGluePropertiesInput`<sup>Optional</sup> <a name="sparkGluePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGluePropertiesInput"></a>

```typescript
public readonly sparkGluePropertiesInput: IResolvable | DatazoneConnectionPropsSparkGlueProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---

##### `workflowsMwaaPropertiesInput`<sup>Optional</sup> <a name="workflowsMwaaPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaPropertiesInput"></a>

```typescript
public readonly workflowsMwaaPropertiesInput: IResolvable | DatazoneConnectionPropsWorkflowsMwaaProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---

##### `workflowsServerlessPropertiesInput`<sup>Optional</sup> <a name="workflowsServerlessPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessPropertiesInput"></a>

```typescript
public readonly workflowsServerlessPropertiesInput: string;
```

- *Type:* string

---

##### `workflowsServerlessProperties`<sup>Required</sup> <a name="workflowsServerlessProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties"></a>

```typescript
public readonly workflowsServerlessProperties: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionProps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---


### DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword">putUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetUsernamePassword">resetUsernamePassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsernamePassword` <a name="putUsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword"></a>

```typescript
public putUsernamePassword(value: DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```

##### `resetUsernamePassword` <a name="resetUsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetUsernamePassword"></a>

```typescript
public resetUsernamePassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword">usernamePassword</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePasswordInput">usernamePasswordInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usernamePassword`<sup>Required</sup> <a name="usernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword"></a>

```typescript
public readonly usernamePassword: DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a>

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `usernamePasswordInput`<sup>Optional</sup> <a name="usernamePasswordInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePasswordInput"></a>

```typescript
public readonly usernamePasswordInput: IResolvable | DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsRedshiftPropertiesCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---


### DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---


### DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsRedshiftPropertiesLineageSync;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---


### DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---


### DatazoneConnectionPropsRedshiftPropertiesOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync">putLineageSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetLineageSync">resetLineageSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetStorage">resetStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredentials` <a name="putCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials"></a>

```typescript
public putCredentials(value: DatazoneConnectionPropsRedshiftPropertiesCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---

##### `putLineageSync` <a name="putLineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync"></a>

```typescript
public putLineageSync(value: DatazoneConnectionPropsRedshiftPropertiesLineageSync): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage"></a>

```typescript
public putStorage(value: DatazoneConnectionPropsRedshiftPropertiesStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetLineageSync` <a name="resetLineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetLineageSync"></a>

```typescript
public resetLineageSync(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetStorage"></a>

```typescript
public resetStorage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync">lineageSync</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSyncInput">lineageSyncInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storageInput">storageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials"></a>

```typescript
public readonly credentials: DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a>

---

##### `lineageSync`<sup>Required</sup> <a name="lineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync"></a>

```typescript
public readonly lineageSync: DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage"></a>

```typescript
public readonly storage: DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: IResolvable | DatazoneConnectionPropsRedshiftPropertiesCredentials;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `lineageSyncInput`<sup>Optional</sup> <a name="lineageSyncInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSyncInput"></a>

```typescript
public readonly lineageSyncInput: IResolvable | DatazoneConnectionPropsRedshiftPropertiesLineageSync;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storageInput"></a>

```typescript
public readonly storageInput: IResolvable | DatazoneConnectionPropsRedshiftPropertiesStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsRedshiftProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---


### DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetWorkgroupName">resetWorkgroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetWorkgroupName` <a name="resetWorkgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetWorkgroupName"></a>

```typescript
public resetWorkgroupName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupNameInput">workgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName">workgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupNameInput"></a>

```typescript
public readonly workgroupNameInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsRedshiftPropertiesStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---


### DatazoneConnectionPropsS3PropertiesOutputReference <a name="DatazoneConnectionPropsS3PropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetRegisterS3AccessGrantLocation">resetRegisterS3AccessGrantLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3AccessGrantLocationId">resetS3AccessGrantLocationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegisterS3AccessGrantLocation` <a name="resetRegisterS3AccessGrantLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetRegisterS3AccessGrantLocation"></a>

```typescript
public resetRegisterS3AccessGrantLocation(): void
```

##### `resetS3AccessGrantLocationId` <a name="resetS3AccessGrantLocationId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3AccessGrantLocationId"></a>

```typescript
public resetS3AccessGrantLocationId(): void
```

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3Uri"></a>

```typescript
public resetS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocationInput">registerS3AccessGrantLocationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationIdInput">s3AccessGrantLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation">registerS3AccessGrantLocation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId">s3AccessGrantLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `registerS3AccessGrantLocationInput`<sup>Optional</sup> <a name="registerS3AccessGrantLocationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocationInput"></a>

```typescript
public readonly registerS3AccessGrantLocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `s3AccessGrantLocationIdInput`<sup>Optional</sup> <a name="s3AccessGrantLocationIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationIdInput"></a>

```typescript
public readonly s3AccessGrantLocationIdInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `registerS3AccessGrantLocation`<sup>Required</sup> <a name="registerS3AccessGrantLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation"></a>

```typescript
public readonly registerS3AccessGrantLocation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `s3AccessGrantLocationId`<sup>Required</sup> <a name="s3AccessGrantLocationId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId"></a>

```typescript
public readonly s3AccessGrantLocationId: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsS3Properties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---


### DatazoneConnectionPropsSparkEmrPropertiesOutputReference <a name="DatazoneConnectionPropsSparkEmrPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetComputeArn">resetComputeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetJavaVirtualEnv">resetJavaVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetLogUri">resetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetManagedEndpointArn">resetManagedEndpointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetPythonVirtualEnv">resetPythonVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetRuntimeRole">resetRuntimeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetTrustedCertificatesS3Uri">resetTrustedCertificatesS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeArn` <a name="resetComputeArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetComputeArn"></a>

```typescript
public resetComputeArn(): void
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetInstanceProfileArn"></a>

```typescript
public resetInstanceProfileArn(): void
```

##### `resetJavaVirtualEnv` <a name="resetJavaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetJavaVirtualEnv"></a>

```typescript
public resetJavaVirtualEnv(): void
```

##### `resetLogUri` <a name="resetLogUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetLogUri"></a>

```typescript
public resetLogUri(): void
```

##### `resetManagedEndpointArn` <a name="resetManagedEndpointArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetManagedEndpointArn"></a>

```typescript
public resetManagedEndpointArn(): void
```

##### `resetPythonVirtualEnv` <a name="resetPythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetPythonVirtualEnv"></a>

```typescript
public resetPythonVirtualEnv(): void
```

##### `resetRuntimeRole` <a name="resetRuntimeRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetRuntimeRole"></a>

```typescript
public resetRuntimeRole(): void
```

##### `resetTrustedCertificatesS3Uri` <a name="resetTrustedCertificatesS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetTrustedCertificatesS3Uri"></a>

```typescript
public resetTrustedCertificatesS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArnInput">computeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnvInput">javaVirtualEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUriInput">logUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArnInput">managedEndpointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnvInput">pythonVirtualEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRoleInput">runtimeRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3UriInput">trustedCertificatesS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn">computeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri">logUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn">managedEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole">runtimeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri">trustedCertificatesS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeArnInput`<sup>Optional</sup> <a name="computeArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArnInput"></a>

```typescript
public readonly computeArnInput: string;
```

- *Type:* string

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `javaVirtualEnvInput`<sup>Optional</sup> <a name="javaVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnvInput"></a>

```typescript
public readonly javaVirtualEnvInput: string;
```

- *Type:* string

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUriInput"></a>

```typescript
public readonly logUriInput: string;
```

- *Type:* string

---

##### `managedEndpointArnInput`<sup>Optional</sup> <a name="managedEndpointArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArnInput"></a>

```typescript
public readonly managedEndpointArnInput: string;
```

- *Type:* string

---

##### `pythonVirtualEnvInput`<sup>Optional</sup> <a name="pythonVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnvInput"></a>

```typescript
public readonly pythonVirtualEnvInput: string;
```

- *Type:* string

---

##### `runtimeRoleInput`<sup>Optional</sup> <a name="runtimeRoleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRoleInput"></a>

```typescript
public readonly runtimeRoleInput: string;
```

- *Type:* string

---

##### `trustedCertificatesS3UriInput`<sup>Optional</sup> <a name="trustedCertificatesS3UriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3UriInput"></a>

```typescript
public readonly trustedCertificatesS3UriInput: string;
```

- *Type:* string

---

##### `computeArn`<sup>Required</sup> <a name="computeArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn"></a>

```typescript
public readonly computeArn: string;
```

- *Type:* string

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `javaVirtualEnv`<sup>Required</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv"></a>

```typescript
public readonly javaVirtualEnv: string;
```

- *Type:* string

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri"></a>

```typescript
public readonly logUri: string;
```

- *Type:* string

---

##### `managedEndpointArn`<sup>Required</sup> <a name="managedEndpointArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn"></a>

```typescript
public readonly managedEndpointArn: string;
```

- *Type:* string

---

##### `pythonVirtualEnv`<sup>Required</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv"></a>

```typescript
public readonly pythonVirtualEnv: string;
```

- *Type:* string

---

##### `runtimeRole`<sup>Required</sup> <a name="runtimeRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole"></a>

```typescript
public readonly runtimeRole: string;
```

- *Type:* string

---

##### `trustedCertificatesS3Uri`<sup>Required</sup> <a name="trustedCertificatesS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri"></a>

```typescript
public readonly trustedCertificatesS3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsSparkEmrProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---


### DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference <a name="DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resetConnection">resetConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnection` <a name="resetConnection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resetConnection"></a>

```typescript
public resetConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connectionInput">connectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection">connection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connectionInput"></a>

```typescript
public readonly connectionInput: string;
```

- *Type:* string

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection"></a>

```typescript
public readonly connection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---


### DatazoneConnectionPropsSparkGluePropertiesOutputReference <a name="DatazoneConnectionPropsSparkGluePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs">putAdditionalArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetAdditionalArgs">resetAdditionalArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueConnectionName">resetGlueConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetJavaVirtualEnv">resetJavaVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetPythonVirtualEnv">resetPythonVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalArgs` <a name="putAdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs"></a>

```typescript
public putAdditionalArgs(value: DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---

##### `resetAdditionalArgs` <a name="resetAdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetAdditionalArgs"></a>

```typescript
public resetAdditionalArgs(): void
```

##### `resetGlueConnectionName` <a name="resetGlueConnectionName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueConnectionName"></a>

```typescript
public resetGlueConnectionName(): void
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueVersion"></a>

```typescript
public resetGlueVersion(): void
```

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetIdleTimeout"></a>

```typescript
public resetIdleTimeout(): void
```

##### `resetJavaVirtualEnv` <a name="resetJavaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetJavaVirtualEnv"></a>

```typescript
public resetJavaVirtualEnv(): void
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetNumberOfWorkers"></a>

```typescript
public resetNumberOfWorkers(): void
```

##### `resetPythonVirtualEnv` <a name="resetPythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetPythonVirtualEnv"></a>

```typescript
public resetPythonVirtualEnv(): void
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetWorkerType"></a>

```typescript
public resetWorkerType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs">additionalArgs</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgsInput">additionalArgsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionNameInput">glueConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersionInput">glueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnvInput">javaVirtualEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnvInput">pythonVirtualEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerTypeInput">workerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion">glueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType">workerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalArgs`<sup>Required</sup> <a name="additionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs"></a>

```typescript
public readonly additionalArgs: DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a>

---

##### `additionalArgsInput`<sup>Optional</sup> <a name="additionalArgsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgsInput"></a>

```typescript
public readonly additionalArgsInput: IResolvable | DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---

##### `glueConnectionNameInput`<sup>Optional</sup> <a name="glueConnectionNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionNameInput"></a>

```typescript
public readonly glueConnectionNameInput: string;
```

- *Type:* string

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersionInput"></a>

```typescript
public readonly glueVersionInput: string;
```

- *Type:* string

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeoutInput"></a>

```typescript
public readonly idleTimeoutInput: number;
```

- *Type:* number

---

##### `javaVirtualEnvInput`<sup>Optional</sup> <a name="javaVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnvInput"></a>

```typescript
public readonly javaVirtualEnvInput: string;
```

- *Type:* string

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkersInput"></a>

```typescript
public readonly numberOfWorkersInput: number;
```

- *Type:* number

---

##### `pythonVirtualEnvInput`<sup>Optional</sup> <a name="pythonVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnvInput"></a>

```typescript
public readonly pythonVirtualEnvInput: string;
```

- *Type:* string

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerTypeInput"></a>

```typescript
public readonly workerTypeInput: string;
```

- *Type:* string

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

---

##### `javaVirtualEnv`<sup>Required</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv"></a>

```typescript
public readonly javaVirtualEnv: string;
```

- *Type:* string

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

---

##### `pythonVirtualEnv`<sup>Required</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv"></a>

```typescript
public readonly pythonVirtualEnv: string;
```

- *Type:* string

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsSparkGlueProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---


### DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference <a name="DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer"></a>

```typescript
import { datazoneConnection } from '@cdktn/provider-awscc'

new datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resetMwaaEnvironmentName">resetMwaaEnvironmentName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMwaaEnvironmentName` <a name="resetMwaaEnvironmentName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resetMwaaEnvironmentName"></a>

```typescript
public resetMwaaEnvironmentName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentNameInput">mwaaEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName">mwaaEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mwaaEnvironmentNameInput`<sup>Optional</sup> <a name="mwaaEnvironmentNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentNameInput"></a>

```typescript
public readonly mwaaEnvironmentNameInput: string;
```

- *Type:* string

---

##### `mwaaEnvironmentName`<sup>Required</sup> <a name="mwaaEnvironmentName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName"></a>

```typescript
public readonly mwaaEnvironmentName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneConnectionPropsWorkflowsMwaaProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---



