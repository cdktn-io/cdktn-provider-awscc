# `lambdaVersion` Submodule <a name="`lambdaVersion` Submodule" id="@cdktn/provider-awscc.lambdaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaVersion <a name="LambdaVersion" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version awscc_lambda_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

new lambdaVersion.LambdaVersion(scope: Construct, id: string, config: LambdaVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig">LambdaVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig">LambdaVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig">putFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig">putProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy">putRuntimePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetCodeSha256">resetCodeSha256</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetFunctionScalingConfig">resetFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetProvisionedConcurrencyConfig">resetProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetRuntimePolicy">resetRuntimePolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFunctionScalingConfig` <a name="putFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig"></a>

```typescript
public putFunctionScalingConfig(value: LambdaVersionFunctionScalingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putFunctionScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

---

##### `putProvisionedConcurrencyConfig` <a name="putProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig"></a>

```typescript
public putProvisionedConcurrencyConfig(value: LambdaVersionProvisionedConcurrencyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putProvisionedConcurrencyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

---

##### `putRuntimePolicy` <a name="putRuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy"></a>

```typescript
public putRuntimePolicy(value: LambdaVersionRuntimePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.putRuntimePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

---

##### `resetCodeSha256` <a name="resetCodeSha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetCodeSha256"></a>

```typescript
public resetCodeSha256(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFunctionScalingConfig` <a name="resetFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetFunctionScalingConfig"></a>

```typescript
public resetFunctionScalingConfig(): void
```

##### `resetProvisionedConcurrencyConfig` <a name="resetProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetProvisionedConcurrencyConfig"></a>

```typescript
public resetProvisionedConcurrencyConfig(): void
```

##### `resetRuntimePolicy` <a name="resetRuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.resetRuntimePolicy"></a>

```typescript
public resetRuntimePolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

lambdaVersion.LambdaVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

lambdaVersion.LambdaVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

lambdaVersion.LambdaVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

lambdaVersion.LambdaVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfig">functionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference">LambdaVersionFunctionScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference">LambdaVersionProvisionedConcurrencyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicy">runtimePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference">LambdaVersionRuntimePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256Input">codeSha256Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfigInput">functionScalingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfigInput">provisionedConcurrencyConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicyInput">runtimePolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256">codeSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `functionScalingConfig`<sup>Required</sup> <a name="functionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfig"></a>

```typescript
public readonly functionScalingConfig: LambdaVersionFunctionScalingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference">LambdaVersionFunctionScalingConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `provisionedConcurrencyConfig`<sup>Required</sup> <a name="provisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: LambdaVersionProvisionedConcurrencyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference">LambdaVersionProvisionedConcurrencyConfigOutputReference</a>

---

##### `runtimePolicy`<sup>Required</sup> <a name="runtimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicy"></a>

```typescript
public readonly runtimePolicy: LambdaVersionRuntimePolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference">LambdaVersionRuntimePolicyOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `codeSha256Input`<sup>Optional</sup> <a name="codeSha256Input" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256Input"></a>

```typescript
public readonly codeSha256Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `functionScalingConfigInput`<sup>Optional</sup> <a name="functionScalingConfigInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionScalingConfigInput"></a>

```typescript
public readonly functionScalingConfigInput: IResolvable | LambdaVersionFunctionScalingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

---

##### `provisionedConcurrencyConfigInput`<sup>Optional</sup> <a name="provisionedConcurrencyConfigInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.provisionedConcurrencyConfigInput"></a>

```typescript
public readonly provisionedConcurrencyConfigInput: IResolvable | LambdaVersionProvisionedConcurrencyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

---

##### `runtimePolicyInput`<sup>Optional</sup> <a name="runtimePolicyInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.runtimePolicyInput"></a>

```typescript
public readonly runtimePolicyInput: IResolvable | LambdaVersionRuntimePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

---

##### `codeSha256`<sup>Required</sup> <a name="codeSha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.codeSha256"></a>

```typescript
public readonly codeSha256: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaVersionConfig <a name="LambdaVersionConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.Initializer"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

const lambdaVersionConfig: lambdaVersion.LambdaVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionName">functionName</a></code> | <code>string</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.codeSha256">codeSha256</a></code> | <code>string</code> | Only publish a version if the hash value matches the value that's specified. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.description">description</a></code> | <code>string</code> | A description for the version to override the description in the function configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionScalingConfig">functionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | The scaling configuration to apply to the function, including minimum and maximum execution environment limits. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.runtimePolicy">runtimePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#function_name LambdaVersion#function_name}

---

##### `codeSha256`<sup>Optional</sup> <a name="codeSha256" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.codeSha256"></a>

```typescript
public readonly codeSha256: string;
```

- *Type:* string

Only publish a version if the hash value matches the value that's specified.

Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#code_sha_256 LambdaVersion#code_sha_256}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the version to override the description in the function configuration.

Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#description LambdaVersion#description}

---

##### `functionScalingConfig`<sup>Optional</sup> <a name="functionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.functionScalingConfig"></a>

```typescript
public readonly functionScalingConfig: LambdaVersionFunctionScalingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

The scaling configuration to apply to the function, including minimum and maximum execution environment limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#function_scaling_config LambdaVersion#function_scaling_config}

---

##### `provisionedConcurrencyConfig`<sup>Optional</sup> <a name="provisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: LambdaVersionProvisionedConcurrencyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#provisioned_concurrency_config LambdaVersion#provisioned_concurrency_config}

---

##### `runtimePolicy`<sup>Optional</sup> <a name="runtimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionConfig.property.runtimePolicy"></a>

```typescript
public readonly runtimePolicy: LambdaVersionRuntimePolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#runtime_policy LambdaVersion#runtime_policy}

---

### LambdaVersionFunctionScalingConfig <a name="LambdaVersionFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.Initializer"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

const lambdaVersionFunctionScalingConfig: lambdaVersion.LambdaVersionFunctionScalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.maxExecutionEnvironments">maxExecutionEnvironments</a></code> | <code>number</code> | The maximum number of execution environments that can be provisioned for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.minExecutionEnvironments">minExecutionEnvironments</a></code> | <code>number</code> | The minimum number of execution environments to maintain for the function. |

---

##### `maxExecutionEnvironments`<sup>Optional</sup> <a name="maxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.maxExecutionEnvironments"></a>

```typescript
public readonly maxExecutionEnvironments: number;
```

- *Type:* number

The maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#max_execution_environments LambdaVersion#max_execution_environments}

---

##### `minExecutionEnvironments`<sup>Optional</sup> <a name="minExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig.property.minExecutionEnvironments"></a>

```typescript
public readonly minExecutionEnvironments: number;
```

- *Type:* number

The minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#min_execution_environments LambdaVersion#min_execution_environments}

---

### LambdaVersionProvisionedConcurrencyConfig <a name="LambdaVersionProvisionedConcurrencyConfig" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.Initializer"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

const lambdaVersionProvisionedConcurrencyConfig: lambdaVersion.LambdaVersionProvisionedConcurrencyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>number</code> | The amount of provisioned concurrency to allocate for the version. |

---

##### `provisionedConcurrentExecutions`<sup>Optional</sup> <a name="provisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions"></a>

```typescript
public readonly provisionedConcurrentExecutions: number;
```

- *Type:* number

The amount of provisioned concurrency to allocate for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#provisioned_concurrent_executions LambdaVersion#provisioned_concurrent_executions}

---

### LambdaVersionRuntimePolicy <a name="LambdaVersionRuntimePolicy" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.Initializer"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

const lambdaVersionRuntimePolicy: lambdaVersion.LambdaVersionRuntimePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>string</code> | The ARN of the runtime the function is configured to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.updateRuntimeOn">updateRuntimeOn</a></code> | <code>string</code> | The runtime update mode. |

---

##### `runtimeVersionArn`<sup>Optional</sup> <a name="runtimeVersionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.runtimeVersionArn"></a>

```typescript
public readonly runtimeVersionArn: string;
```

- *Type:* string

The ARN of the runtime the function is configured to use.

If the runtime update mode is manual, the ARN is returned, otherwise null is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#runtime_version_arn LambdaVersion#runtime_version_arn}

---

##### `updateRuntimeOn`<sup>Optional</sup> <a name="updateRuntimeOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy.property.updateRuntimeOn"></a>

```typescript
public readonly updateRuntimeOn: string;
```

- *Type:* string

The runtime update mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_version#update_runtime_on LambdaVersion#update_runtime_on}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaVersionFunctionScalingConfigOutputReference <a name="LambdaVersionFunctionScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

new lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments">resetMaxExecutionEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments">resetMinExecutionEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxExecutionEnvironments` <a name="resetMaxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments"></a>

```typescript
public resetMaxExecutionEnvironments(): void
```

##### `resetMinExecutionEnvironments` <a name="resetMinExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments"></a>

```typescript
public resetMinExecutionEnvironments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput">maxExecutionEnvironmentsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput">minExecutionEnvironmentsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments">maxExecutionEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironments">minExecutionEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxExecutionEnvironmentsInput`<sup>Optional</sup> <a name="maxExecutionEnvironmentsInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput"></a>

```typescript
public readonly maxExecutionEnvironmentsInput: number;
```

- *Type:* number

---

##### `minExecutionEnvironmentsInput`<sup>Optional</sup> <a name="minExecutionEnvironmentsInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput"></a>

```typescript
public readonly minExecutionEnvironmentsInput: number;
```

- *Type:* number

---

##### `maxExecutionEnvironments`<sup>Required</sup> <a name="maxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments"></a>

```typescript
public readonly maxExecutionEnvironments: number;
```

- *Type:* number

---

##### `minExecutionEnvironments`<sup>Required</sup> <a name="minExecutionEnvironments" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.minExecutionEnvironments"></a>

```typescript
public readonly minExecutionEnvironments: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaVersionFunctionScalingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionFunctionScalingConfig">LambdaVersionFunctionScalingConfig</a>

---


### LambdaVersionProvisionedConcurrencyConfigOutputReference <a name="LambdaVersionProvisionedConcurrencyConfigOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

new lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions">resetProvisionedConcurrentExecutions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProvisionedConcurrentExecutions` <a name="resetProvisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.resetProvisionedConcurrentExecutions"></a>

```typescript
public resetProvisionedConcurrentExecutions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput">provisionedConcurrentExecutionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provisionedConcurrentExecutionsInput`<sup>Optional</sup> <a name="provisionedConcurrentExecutionsInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutionsInput"></a>

```typescript
public readonly provisionedConcurrentExecutionsInput: number;
```

- *Type:* number

---

##### `provisionedConcurrentExecutions`<sup>Required</sup> <a name="provisionedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.provisionedConcurrentExecutions"></a>

```typescript
public readonly provisionedConcurrentExecutions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaVersionProvisionedConcurrencyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionProvisionedConcurrencyConfig">LambdaVersionProvisionedConcurrencyConfig</a>

---


### LambdaVersionRuntimePolicyOutputReference <a name="LambdaVersionRuntimePolicyOutputReference" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer"></a>

```typescript
import { lambdaVersion } from '@cdktn/provider-awscc'

new lambdaVersion.LambdaVersionRuntimePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetRuntimeVersionArn">resetRuntimeVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetUpdateRuntimeOn">resetUpdateRuntimeOn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRuntimeVersionArn` <a name="resetRuntimeVersionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetRuntimeVersionArn"></a>

```typescript
public resetRuntimeVersionArn(): void
```

##### `resetUpdateRuntimeOn` <a name="resetUpdateRuntimeOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.resetUpdateRuntimeOn"></a>

```typescript
public resetUpdateRuntimeOn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArnInput">runtimeVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOnInput">updateRuntimeOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOn">updateRuntimeOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `runtimeVersionArnInput`<sup>Optional</sup> <a name="runtimeVersionArnInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArnInput"></a>

```typescript
public readonly runtimeVersionArnInput: string;
```

- *Type:* string

---

##### `updateRuntimeOnInput`<sup>Optional</sup> <a name="updateRuntimeOnInput" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOnInput"></a>

```typescript
public readonly updateRuntimeOnInput: string;
```

- *Type:* string

---

##### `runtimeVersionArn`<sup>Required</sup> <a name="runtimeVersionArn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.runtimeVersionArn"></a>

```typescript
public readonly runtimeVersionArn: string;
```

- *Type:* string

---

##### `updateRuntimeOn`<sup>Required</sup> <a name="updateRuntimeOn" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.updateRuntimeOn"></a>

```typescript
public readonly updateRuntimeOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaVersionRuntimePolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaVersion.LambdaVersionRuntimePolicy">LambdaVersionRuntimePolicy</a>

---



