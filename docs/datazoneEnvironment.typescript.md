# `datazoneEnvironment` Submodule <a name="`datazoneEnvironment` Submodule" id="@cdktn/provider-awscc.datazoneEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironment <a name="DatazoneEnvironment" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment awscc_datazone_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer"></a>

```typescript
import { datazoneEnvironment } from '@cdktn/provider-awscc'

new datazoneEnvironment.DatazoneEnvironment(scope: Construct, id: string, config: DatazoneEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig">DatazoneEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig">DatazoneEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters">putUserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDeploymentOrder">resetDeploymentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountIdentifier">resetEnvironmentAccountIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountRegion">resetEnvironmentAccountRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentBlueprintIdentifier">resetEnvironmentBlueprintIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentConfigurationId">resetEnvironmentConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentProfileIdentifier">resetEnvironmentProfileIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentRoleArn">resetEnvironmentRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetGlossaryTerms">resetGlossaryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetUserParameters">resetUserParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putUserParameters` <a name="putUserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters"></a>

```typescript
public putUserParameters(value: IResolvable | DatazoneEnvironmentUserParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]

---

##### `resetDeploymentOrder` <a name="resetDeploymentOrder" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDeploymentOrder"></a>

```typescript
public resetDeploymentOrder(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironmentAccountIdentifier` <a name="resetEnvironmentAccountIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountIdentifier"></a>

```typescript
public resetEnvironmentAccountIdentifier(): void
```

##### `resetEnvironmentAccountRegion` <a name="resetEnvironmentAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountRegion"></a>

```typescript
public resetEnvironmentAccountRegion(): void
```

##### `resetEnvironmentBlueprintIdentifier` <a name="resetEnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentBlueprintIdentifier"></a>

```typescript
public resetEnvironmentBlueprintIdentifier(): void
```

##### `resetEnvironmentConfigurationId` <a name="resetEnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentConfigurationId"></a>

```typescript
public resetEnvironmentConfigurationId(): void
```

##### `resetEnvironmentProfileIdentifier` <a name="resetEnvironmentProfileIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentProfileIdentifier"></a>

```typescript
public resetEnvironmentProfileIdentifier(): void
```

##### `resetEnvironmentRoleArn` <a name="resetEnvironmentRoleArn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentRoleArn"></a>

```typescript
public resetEnvironmentRoleArn(): void
```

##### `resetGlossaryTerms` <a name="resetGlossaryTerms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetGlossaryTerms"></a>

```typescript
public resetGlossaryTerms(): void
```

##### `resetUserParameters` <a name="resetUserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetUserParameters"></a>

```typescript
public resetUserParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct"></a>

```typescript
import { datazoneEnvironment } from '@cdktn/provider-awscc'

datazoneEnvironment.DatazoneEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement"></a>

```typescript
import { datazoneEnvironment } from '@cdktn/provider-awscc'

datazoneEnvironment.DatazoneEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource"></a>

```typescript
import { datazoneEnvironment } from '@cdktn/provider-awscc'

datazoneEnvironment.DatazoneEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport"></a>

```typescript
import { datazoneEnvironment } from '@cdktn/provider-awscc'

datazoneEnvironment.DatazoneEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatazoneEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountRegion">awsAccountRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintId">environmentBlueprintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileId">environmentProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParameters">userParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList">DatazoneEnvironmentUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrderInput">deploymentOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifierInput">environmentAccountIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegionInput">environmentAccountRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifierInput">environmentBlueprintIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationIdInput">environmentConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifierInput">environmentProfileIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArnInput">environmentRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTermsInput">glossaryTermsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifierInput">projectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParametersInput">userParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrder">deploymentOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifier">environmentAccountIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegion">environmentAccountRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationId">environmentConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifier">environmentProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArn">environmentRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTerms">glossaryTerms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsAccountRegion`<sup>Required</sup> <a name="awsAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountRegion"></a>

```typescript
public readonly awsAccountRegion: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `environmentBlueprintId`<sup>Required</sup> <a name="environmentBlueprintId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintId"></a>

```typescript
public readonly environmentBlueprintId: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `environmentProfileId`<sup>Required</sup> <a name="environmentProfileId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileId"></a>

```typescript
public readonly environmentProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `userParameters`<sup>Required</sup> <a name="userParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParameters"></a>

```typescript
public readonly userParameters: DatazoneEnvironmentUserParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList">DatazoneEnvironmentUserParametersList</a>

---

##### `deploymentOrderInput`<sup>Optional</sup> <a name="deploymentOrderInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrderInput"></a>

```typescript
public readonly deploymentOrderInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `environmentAccountIdentifierInput`<sup>Optional</sup> <a name="environmentAccountIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifierInput"></a>

```typescript
public readonly environmentAccountIdentifierInput: string;
```

- *Type:* string

---

##### `environmentAccountRegionInput`<sup>Optional</sup> <a name="environmentAccountRegionInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegionInput"></a>

```typescript
public readonly environmentAccountRegionInput: string;
```

- *Type:* string

---

##### `environmentBlueprintIdentifierInput`<sup>Optional</sup> <a name="environmentBlueprintIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifierInput"></a>

```typescript
public readonly environmentBlueprintIdentifierInput: string;
```

- *Type:* string

---

##### `environmentConfigurationIdInput`<sup>Optional</sup> <a name="environmentConfigurationIdInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationIdInput"></a>

```typescript
public readonly environmentConfigurationIdInput: string;
```

- *Type:* string

---

##### `environmentProfileIdentifierInput`<sup>Optional</sup> <a name="environmentProfileIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifierInput"></a>

```typescript
public readonly environmentProfileIdentifierInput: string;
```

- *Type:* string

---

##### `environmentRoleArnInput`<sup>Optional</sup> <a name="environmentRoleArnInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArnInput"></a>

```typescript
public readonly environmentRoleArnInput: string;
```

- *Type:* string

---

##### `glossaryTermsInput`<sup>Optional</sup> <a name="glossaryTermsInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTermsInput"></a>

```typescript
public readonly glossaryTermsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdentifierInput`<sup>Optional</sup> <a name="projectIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifierInput"></a>

```typescript
public readonly projectIdentifierInput: string;
```

- *Type:* string

---

##### `userParametersInput`<sup>Optional</sup> <a name="userParametersInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParametersInput"></a>

```typescript
public readonly userParametersInput: IResolvable | DatazoneEnvironmentUserParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]

---

##### `deploymentOrder`<sup>Required</sup> <a name="deploymentOrder" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrder"></a>

```typescript
public readonly deploymentOrder: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `environmentAccountIdentifier`<sup>Required</sup> <a name="environmentAccountIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifier"></a>

```typescript
public readonly environmentAccountIdentifier: string;
```

- *Type:* string

---

##### `environmentAccountRegion`<sup>Required</sup> <a name="environmentAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegion"></a>

```typescript
public readonly environmentAccountRegion: string;
```

- *Type:* string

---

##### `environmentBlueprintIdentifier`<sup>Required</sup> <a name="environmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifier"></a>

```typescript
public readonly environmentBlueprintIdentifier: string;
```

- *Type:* string

---

##### `environmentConfigurationId`<sup>Required</sup> <a name="environmentConfigurationId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationId"></a>

```typescript
public readonly environmentConfigurationId: string;
```

- *Type:* string

---

##### `environmentProfileIdentifier`<sup>Required</sup> <a name="environmentProfileIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifier"></a>

```typescript
public readonly environmentProfileIdentifier: string;
```

- *Type:* string

---

##### `environmentRoleArn`<sup>Required</sup> <a name="environmentRoleArn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArn"></a>

```typescript
public readonly environmentRoleArn: string;
```

- *Type:* string

---

##### `glossaryTerms`<sup>Required</sup> <a name="glossaryTerms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentConfig <a name="DatazoneEnvironmentConfig" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.Initializer"></a>

```typescript
import { datazoneEnvironment } from '@cdktn/provider-awscc'

const datazoneEnvironmentConfig: datazoneEnvironment.DatazoneEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.name">name</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | The ID of the Amazon DataZone project in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.deploymentOrder">deploymentOrder</a></code> | <code>number</code> | The deployment order for the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.description">description</a></code> | <code>string</code> | The description of the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountIdentifier">environmentAccountIdentifier</a></code> | <code>string</code> | The AWS account in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountRegion">environmentAccountRegion</a></code> | <code>string</code> | The AWS region in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentBlueprintIdentifier">environmentBlueprintIdentifier</a></code> | <code>string</code> | The identifier of the environment blueprint. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentConfigurationId">environmentConfigurationId</a></code> | <code>string</code> | The identifier of the environment configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentProfileIdentifier">environmentProfileIdentifier</a></code> | <code>string</code> | The ID of the environment profile with which the Amazon DataZone environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentRoleArn">environmentRoleArn</a></code> | <code>string</code> | Environment role arn for custom aws environment permissions. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.glossaryTerms">glossaryTerms</a></code> | <code>string[]</code> | The glossary terms that can be used in the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.userParameters">userParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]</code> | The user parameters of the Amazon DataZone environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#domain_identifier DatazoneEnvironment#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

The ID of the Amazon DataZone project in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#project_identifier DatazoneEnvironment#project_identifier}

---

##### `deploymentOrder`<sup>Optional</sup> <a name="deploymentOrder" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.deploymentOrder"></a>

```typescript
public readonly deploymentOrder: number;
```

- *Type:* number

The deployment order for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#deployment_order DatazoneEnvironment#deployment_order}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#description DatazoneEnvironment#description}

---

##### `environmentAccountIdentifier`<sup>Optional</sup> <a name="environmentAccountIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountIdentifier"></a>

```typescript
public readonly environmentAccountIdentifier: string;
```

- *Type:* string

The AWS account in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_account_identifier DatazoneEnvironment#environment_account_identifier}

---

##### `environmentAccountRegion`<sup>Optional</sup> <a name="environmentAccountRegion" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountRegion"></a>

```typescript
public readonly environmentAccountRegion: string;
```

- *Type:* string

The AWS region in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_account_region DatazoneEnvironment#environment_account_region}

---

##### `environmentBlueprintIdentifier`<sup>Optional</sup> <a name="environmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentBlueprintIdentifier"></a>

```typescript
public readonly environmentBlueprintIdentifier: string;
```

- *Type:* string

The identifier of the environment blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_blueprint_identifier DatazoneEnvironment#environment_blueprint_identifier}

---

##### `environmentConfigurationId`<sup>Optional</sup> <a name="environmentConfigurationId" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentConfigurationId"></a>

```typescript
public readonly environmentConfigurationId: string;
```

- *Type:* string

The identifier of the environment configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_configuration_id DatazoneEnvironment#environment_configuration_id}

---

##### `environmentProfileIdentifier`<sup>Optional</sup> <a name="environmentProfileIdentifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentProfileIdentifier"></a>

```typescript
public readonly environmentProfileIdentifier: string;
```

- *Type:* string

The ID of the environment profile with which the Amazon DataZone environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_profile_identifier DatazoneEnvironment#environment_profile_identifier}

---

##### `environmentRoleArn`<sup>Optional</sup> <a name="environmentRoleArn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentRoleArn"></a>

```typescript
public readonly environmentRoleArn: string;
```

- *Type:* string

Environment role arn for custom aws environment permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#environment_role_arn DatazoneEnvironment#environment_role_arn}

---

##### `glossaryTerms`<sup>Optional</sup> <a name="glossaryTerms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.glossaryTerms"></a>

```typescript
public readonly glossaryTerms: string[];
```

- *Type:* string[]

The glossary terms that can be used in the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#glossary_terms DatazoneEnvironment#glossary_terms}

---

##### `userParameters`<sup>Optional</sup> <a name="userParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.userParameters"></a>

```typescript
public readonly userParameters: IResolvable | DatazoneEnvironmentUserParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]

The user parameters of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#user_parameters DatazoneEnvironment#user_parameters}

---

### DatazoneEnvironmentUserParameters <a name="DatazoneEnvironmentUserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.Initializer"></a>

```typescript
import { datazoneEnvironment } from '@cdktn/provider-awscc'

const datazoneEnvironmentUserParameters: datazoneEnvironment.DatazoneEnvironmentUserParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.name">name</a></code> | <code>string</code> | The name of an environment parameter. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.value">value</a></code> | <code>string</code> | The value of an environment parameter. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of an environment parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of an environment parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment#value DatazoneEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentUserParametersList <a name="DatazoneEnvironmentUserParametersList" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer"></a>

```typescript
import { datazoneEnvironment } from '@cdktn/provider-awscc'

new datazoneEnvironment.DatazoneEnvironmentUserParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get"></a>

```typescript
public get(index: number): DatazoneEnvironmentUserParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneEnvironmentUserParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>[]

---


### DatazoneEnvironmentUserParametersOutputReference <a name="DatazoneEnvironmentUserParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer"></a>

```typescript
import { datazoneEnvironment } from '@cdktn/provider-awscc'

new datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneEnvironmentUserParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>

---



