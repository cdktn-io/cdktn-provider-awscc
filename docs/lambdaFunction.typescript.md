# `lambdaFunction` Submodule <a name="`lambdaFunction` Submodule" id="@cdktn/provider-awscc.lambdaFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunction <a name="LambdaFunction" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function awscc_lambda_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunction(scope: Construct, id: string, config: LambdaFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig">LambdaFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig">LambdaFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCapacityProviderConfig">putCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode">putCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDeadLetterConfig">putDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDurableConfig">putDurableConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEphemeralStorage">putEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFileSystemConfigs">putFileSystemConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFunctionScalingConfig">putFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig">putImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putRuntimeManagementConfig">putRuntimeManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putSnapStart">putSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTenancyConfig">putTenancyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTracingConfig">putTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCapacityProviderConfig">resetCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn">resetCodeSigningConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDeadLetterConfig">resetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDurableConfig">resetDurableConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEphemeralStorage">resetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFileSystemConfigs">resetFileSystemConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionScalingConfig">resetFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetHandler">resetHandler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetImageConfig">resetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLayers">resetLayers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetMemorySize">resetMemorySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPackageType">resetPackageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPublishToLatestPublished">resetPublishToLatestPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRecursiveLoop">resetRecursiveLoop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions">resetReservedConcurrentExecutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntimeManagementConfig">resetRuntimeManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetSnapStart">resetSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTenancyConfig">resetTenancyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTracingConfig">resetTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityProviderConfig` <a name="putCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCapacityProviderConfig"></a>

```typescript
public putCapacityProviderConfig(value: LambdaFunctionCapacityProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCapacityProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

---

##### `putCode` <a name="putCode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode"></a>

```typescript
public putCode(value: LambdaFunctionCode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

---

##### `putDeadLetterConfig` <a name="putDeadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDeadLetterConfig"></a>

```typescript
public putDeadLetterConfig(value: LambdaFunctionDeadLetterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `putDurableConfig` <a name="putDurableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDurableConfig"></a>

```typescript
public putDurableConfig(value: LambdaFunctionDurableConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDurableConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEnvironment"></a>

```typescript
public putEnvironment(value: LambdaFunctionEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `putEphemeralStorage` <a name="putEphemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEphemeralStorage"></a>

```typescript
public putEphemeralStorage(value: LambdaFunctionEphemeralStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEphemeralStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `putFileSystemConfigs` <a name="putFileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFileSystemConfigs"></a>

```typescript
public putFileSystemConfigs(value: IResolvable | LambdaFunctionFileSystemConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFileSystemConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]

---

##### `putFunctionScalingConfig` <a name="putFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFunctionScalingConfig"></a>

```typescript
public putFunctionScalingConfig(value: LambdaFunctionFunctionScalingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFunctionScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

---

##### `putImageConfig` <a name="putImageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig"></a>

```typescript
public putImageConfig(value: LambdaFunctionImageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: LambdaFunctionLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

---

##### `putRuntimeManagementConfig` <a name="putRuntimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putRuntimeManagementConfig"></a>

```typescript
public putRuntimeManagementConfig(value: LambdaFunctionRuntimeManagementConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putRuntimeManagementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

---

##### `putSnapStart` <a name="putSnapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putSnapStart"></a>

```typescript
public putSnapStart(value: LambdaFunctionSnapStart): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putSnapStart.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTags"></a>

```typescript
public putTags(value: IResolvable | LambdaFunctionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]

---

##### `putTenancyConfig` <a name="putTenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTenancyConfig"></a>

```typescript
public putTenancyConfig(value: LambdaFunctionTenancyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTenancyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

---

##### `putTracingConfig` <a name="putTracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTracingConfig"></a>

```typescript
public putTracingConfig(value: LambdaFunctionTracingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTracingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig"></a>

```typescript
public putVpcConfig(value: LambdaFunctionVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetArchitectures"></a>

```typescript
public resetArchitectures(): void
```

##### `resetCapacityProviderConfig` <a name="resetCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCapacityProviderConfig"></a>

```typescript
public resetCapacityProviderConfig(): void
```

##### `resetCodeSigningConfigArn` <a name="resetCodeSigningConfigArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn"></a>

```typescript
public resetCodeSigningConfigArn(): void
```

##### `resetDeadLetterConfig` <a name="resetDeadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDeadLetterConfig"></a>

```typescript
public resetDeadLetterConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDurableConfig` <a name="resetDurableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDurableConfig"></a>

```typescript
public resetDurableConfig(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetEphemeralStorage` <a name="resetEphemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEphemeralStorage"></a>

```typescript
public resetEphemeralStorage(): void
```

##### `resetFileSystemConfigs` <a name="resetFileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFileSystemConfigs"></a>

```typescript
public resetFileSystemConfigs(): void
```

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionName"></a>

```typescript
public resetFunctionName(): void
```

##### `resetFunctionScalingConfig` <a name="resetFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionScalingConfig"></a>

```typescript
public resetFunctionScalingConfig(): void
```

##### `resetHandler` <a name="resetHandler" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetHandler"></a>

```typescript
public resetHandler(): void
```

##### `resetImageConfig` <a name="resetImageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetImageConfig"></a>

```typescript
public resetImageConfig(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetLayers` <a name="resetLayers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLayers"></a>

```typescript
public resetLayers(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

##### `resetMemorySize` <a name="resetMemorySize" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetMemorySize"></a>

```typescript
public resetMemorySize(): void
```

##### `resetPackageType` <a name="resetPackageType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPackageType"></a>

```typescript
public resetPackageType(): void
```

##### `resetPublishToLatestPublished` <a name="resetPublishToLatestPublished" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPublishToLatestPublished"></a>

```typescript
public resetPublishToLatestPublished(): void
```

##### `resetRecursiveLoop` <a name="resetRecursiveLoop" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRecursiveLoop"></a>

```typescript
public resetRecursiveLoop(): void
```

##### `resetReservedConcurrentExecutions` <a name="resetReservedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions"></a>

```typescript
public resetReservedConcurrentExecutions(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetRuntimeManagementConfig` <a name="resetRuntimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntimeManagementConfig"></a>

```typescript
public resetRuntimeManagementConfig(): void
```

##### `resetSnapStart` <a name="resetSnapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetSnapStart"></a>

```typescript
public resetSnapStart(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenancyConfig` <a name="resetTenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTenancyConfig"></a>

```typescript
public resetTenancyConfig(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTracingConfig` <a name="resetTracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTracingConfig"></a>

```typescript
public resetTracingConfig(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaFunction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isConstruct"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

lambdaFunction.LambdaFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformElement"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

lambdaFunction.LambdaFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformResource"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

lambdaFunction.LambdaFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

lambdaFunction.LambdaFunction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LambdaFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfig">capacityProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference">LambdaFunctionCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfig">durableConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference">LambdaFunctionDurableConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigs">fileSystemConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList">LambdaFunctionFileSystemConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfig">functionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference">LambdaFunctionFunctionScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference">LambdaFunctionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfig">runtimeManagementConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference">LambdaFunctionRuntimeManagementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStart">snapStart</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartResponse">snapStartResponse</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference">LambdaFunctionSnapStartResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList">LambdaFunctionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfig">tenancyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference">LambdaFunctionTenancyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfig">tracingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architecturesInput">architecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfigInput">capacityProviderConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeInput">codeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput">codeSigningConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfigInput">deadLetterConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfigInput">durableConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environmentInput">environmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorageInput">ephemeralStorageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigsInput">fileSystemConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfigInput">functionScalingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handlerInput">handlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfigInput">imageConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layersInput">layersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfigInput">loggingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySizeInput">memorySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageTypeInput">packageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublishedInput">publishToLatestPublishedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoopInput">recursiveLoopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput">reservedConcurrentExecutionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfigInput">runtimeManagementConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartInput">snapStartInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfigInput">tenancyConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfigInput">tracingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architectures">architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArn">codeSigningConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layers">layers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageType">packageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublished">publishToLatestPublished</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoop">recursiveLoop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityProviderConfig`<sup>Required</sup> <a name="capacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfig"></a>

```typescript
public readonly capacityProviderConfig: LambdaFunctionCapacityProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigOutputReference</a>

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.code"></a>

```typescript
public readonly code: LambdaFunctionCodeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference">LambdaFunctionCodeOutputReference</a>

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: LambdaFunctionDeadLetterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a>

---

##### `durableConfig`<sup>Required</sup> <a name="durableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfig"></a>

```typescript
public readonly durableConfig: LambdaFunctionDurableConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference">LambdaFunctionDurableConfigOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environment"></a>

```typescript
public readonly environment: LambdaFunctionEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a>

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: LambdaFunctionEphemeralStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a>

---

##### `fileSystemConfigs`<sup>Required</sup> <a name="fileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigs"></a>

```typescript
public readonly fileSystemConfigs: LambdaFunctionFileSystemConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList">LambdaFunctionFileSystemConfigsList</a>

---

##### `functionScalingConfig`<sup>Required</sup> <a name="functionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfig"></a>

```typescript
public readonly functionScalingConfig: LambdaFunctionFunctionScalingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference">LambdaFunctionFunctionScalingConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageConfig`<sup>Required</sup> <a name="imageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfig"></a>

```typescript
public readonly imageConfig: LambdaFunctionImageConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a>

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: LambdaFunctionLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference">LambdaFunctionLoggingConfigOutputReference</a>

---

##### `runtimeManagementConfig`<sup>Required</sup> <a name="runtimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfig"></a>

```typescript
public readonly runtimeManagementConfig: LambdaFunctionRuntimeManagementConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference">LambdaFunctionRuntimeManagementConfigOutputReference</a>

---

##### `snapStart`<sup>Required</sup> <a name="snapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStart"></a>

```typescript
public readonly snapStart: LambdaFunctionSnapStartOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a>

---

##### `snapStartResponse`<sup>Required</sup> <a name="snapStartResponse" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartResponse"></a>

```typescript
public readonly snapStartResponse: LambdaFunctionSnapStartResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference">LambdaFunctionSnapStartResponseOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tags"></a>

```typescript
public readonly tags: LambdaFunctionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList">LambdaFunctionTagsList</a>

---

##### `tenancyConfig`<sup>Required</sup> <a name="tenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfig"></a>

```typescript
public readonly tenancyConfig: LambdaFunctionTenancyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference">LambdaFunctionTenancyConfigOutputReference</a>

---

##### `tracingConfig`<sup>Required</sup> <a name="tracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfig"></a>

```typescript
public readonly tracingConfig: LambdaFunctionTracingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: LambdaFunctionVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a>

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architecturesInput"></a>

```typescript
public readonly architecturesInput: string[];
```

- *Type:* string[]

---

##### `capacityProviderConfigInput`<sup>Optional</sup> <a name="capacityProviderConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfigInput"></a>

```typescript
public readonly capacityProviderConfigInput: IResolvable | LambdaFunctionCapacityProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeInput"></a>

```typescript
public readonly codeInput: IResolvable | LambdaFunctionCode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

---

##### `codeSigningConfigArnInput`<sup>Optional</sup> <a name="codeSigningConfigArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput"></a>

```typescript
public readonly codeSigningConfigArnInput: string;
```

- *Type:* string

---

##### `deadLetterConfigInput`<sup>Optional</sup> <a name="deadLetterConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfigInput"></a>

```typescript
public readonly deadLetterConfigInput: IResolvable | LambdaFunctionDeadLetterConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `durableConfigInput`<sup>Optional</sup> <a name="durableConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfigInput"></a>

```typescript
public readonly durableConfigInput: IResolvable | LambdaFunctionDurableConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environmentInput"></a>

```typescript
public readonly environmentInput: IResolvable | LambdaFunctionEnvironment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `ephemeralStorageInput`<sup>Optional</sup> <a name="ephemeralStorageInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorageInput"></a>

```typescript
public readonly ephemeralStorageInput: IResolvable | LambdaFunctionEphemeralStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `fileSystemConfigsInput`<sup>Optional</sup> <a name="fileSystemConfigsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigsInput"></a>

```typescript
public readonly fileSystemConfigsInput: IResolvable | LambdaFunctionFileSystemConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `functionScalingConfigInput`<sup>Optional</sup> <a name="functionScalingConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfigInput"></a>

```typescript
public readonly functionScalingConfigInput: IResolvable | LambdaFunctionFunctionScalingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handlerInput"></a>

```typescript
public readonly handlerInput: string;
```

- *Type:* string

---

##### `imageConfigInput`<sup>Optional</sup> <a name="imageConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfigInput"></a>

```typescript
public readonly imageConfigInput: IResolvable | LambdaFunctionImageConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `layersInput`<sup>Optional</sup> <a name="layersInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layersInput"></a>

```typescript
public readonly layersInput: string[];
```

- *Type:* string[]

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: IResolvable | LambdaFunctionLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

---

##### `memorySizeInput`<sup>Optional</sup> <a name="memorySizeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySizeInput"></a>

```typescript
public readonly memorySizeInput: number;
```

- *Type:* number

---

##### `packageTypeInput`<sup>Optional</sup> <a name="packageTypeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageTypeInput"></a>

```typescript
public readonly packageTypeInput: string;
```

- *Type:* string

---

##### `publishToLatestPublishedInput`<sup>Optional</sup> <a name="publishToLatestPublishedInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublishedInput"></a>

```typescript
public readonly publishToLatestPublishedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recursiveLoopInput`<sup>Optional</sup> <a name="recursiveLoopInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoopInput"></a>

```typescript
public readonly recursiveLoopInput: string;
```

- *Type:* string

---

##### `reservedConcurrentExecutionsInput`<sup>Optional</sup> <a name="reservedConcurrentExecutionsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput"></a>

```typescript
public readonly reservedConcurrentExecutionsInput: number;
```

- *Type:* number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `runtimeManagementConfigInput`<sup>Optional</sup> <a name="runtimeManagementConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfigInput"></a>

```typescript
public readonly runtimeManagementConfigInput: IResolvable | LambdaFunctionRuntimeManagementConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

---

##### `snapStartInput`<sup>Optional</sup> <a name="snapStartInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartInput"></a>

```typescript
public readonly snapStartInput: IResolvable | LambdaFunctionSnapStart;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LambdaFunctionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]

---

##### `tenancyConfigInput`<sup>Optional</sup> <a name="tenancyConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfigInput"></a>

```typescript
public readonly tenancyConfigInput: IResolvable | LambdaFunctionTenancyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `tracingConfigInput`<sup>Optional</sup> <a name="tracingConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfigInput"></a>

```typescript
public readonly tracingConfigInput: IResolvable | LambdaFunctionTracingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | LambdaFunctionVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

---

##### `codeSigningConfigArn`<sup>Required</sup> <a name="codeSigningConfigArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArn"></a>

```typescript
public readonly codeSigningConfigArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `layers`<sup>Required</sup> <a name="layers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layers"></a>

```typescript
public readonly layers: string[];
```

- *Type:* string[]

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `packageType`<sup>Required</sup> <a name="packageType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

---

##### `publishToLatestPublished`<sup>Required</sup> <a name="publishToLatestPublished" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublished"></a>

```typescript
public readonly publishToLatestPublished: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recursiveLoop`<sup>Required</sup> <a name="recursiveLoop" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoop"></a>

```typescript
public readonly recursiveLoop: string;
```

- *Type:* string

---

##### `reservedConcurrentExecutions`<sup>Required</sup> <a name="reservedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionCapacityProviderConfig <a name="LambdaFunctionCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionCapacityProviderConfig: lambdaFunction.LambdaFunctionCapacityProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig.property.lambdaManagedInstancesCapacityProviderConfig">lambdaManagedInstancesCapacityProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a></code> | Configuration for Lambda-managed instances used by the capacity provider. |

---

##### `lambdaManagedInstancesCapacityProviderConfig`<sup>Optional</sup> <a name="lambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig.property.lambdaManagedInstancesCapacityProviderConfig"></a>

```typescript
public readonly lambdaManagedInstancesCapacityProviderConfig: LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

Configuration for Lambda-managed instances used by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#lambda_managed_instances_capacity_provider_config LambdaFunction#lambda_managed_instances_capacity_provider_config}

---

### LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig <a name="LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig: lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.capacityProviderArn">capacityProviderArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.executionEnvironmentMemoryGiBPerVCpu">executionEnvironmentMemoryGiBPerVCpu</a></code> | <code>number</code> | The amount of memory in GiB allocated per vCPU for execution environments. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.perExecutionEnvironmentMaxConcurrency">perExecutionEnvironmentMaxConcurrency</a></code> | <code>number</code> | The maximum number of concurrent executions that can run on each execution environment. |

---

##### `capacityProviderArn`<sup>Optional</sup> <a name="capacityProviderArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.capacityProviderArn"></a>

```typescript
public readonly capacityProviderArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#capacity_provider_arn LambdaFunction#capacity_provider_arn}

---

##### `executionEnvironmentMemoryGiBPerVCpu`<sup>Optional</sup> <a name="executionEnvironmentMemoryGiBPerVCpu" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.executionEnvironmentMemoryGiBPerVCpu"></a>

```typescript
public readonly executionEnvironmentMemoryGiBPerVCpu: number;
```

- *Type:* number

The amount of memory in GiB allocated per vCPU for execution environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#execution_environment_memory_gi_b_per_v_cpu LambdaFunction#execution_environment_memory_gi_b_per_v_cpu}

---

##### `perExecutionEnvironmentMaxConcurrency`<sup>Optional</sup> <a name="perExecutionEnvironmentMaxConcurrency" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.perExecutionEnvironmentMaxConcurrency"></a>

```typescript
public readonly perExecutionEnvironmentMaxConcurrency: number;
```

- *Type:* number

The maximum number of concurrent executions that can run on each execution environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#per_execution_environment_max_concurrency LambdaFunction#per_execution_environment_max_concurrency}

---

### LambdaFunctionCode <a name="LambdaFunctionCode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionCode: lambdaFunction.LambdaFunctionCode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.imageUri">imageUri</a></code> | <code>string</code> | URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Key">s3Key</a></code> | <code>string</code> | The Amazon S3 key of the deployment package. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectStorageMode">s3ObjectStorageMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#s3_object_storage_mode LambdaFunction#s3_object_storage_mode}. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | For versioned objects, the version of the deployment package object to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.sourceKmsKeyArn">sourceKmsKeyArn</a></code> | <code>string</code> | The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.zipFile">zipFile</a></code> | <code>string</code> | (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.   When you specify source code inline for a Node.js function, the ``index`` file that CFN creates uses the extension ``.js``. This means that Node.js treats the file as a CommonJS module.  When using Node.js 24 or later, Node.js can automatically detect if a ``.js`` file should be treated as CommonJS or as an ES module. To enable auto-detection, add the ``--experimental-detect-module`` flag to the ``NODE_OPTIONS`` environment variable. For more information, see [Experimental Node.js features](https://docs.aws.amazon.com//lambda/latest/dg/lambda-nodejs.html#nodejs-experimental-features).    For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.  If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details. |

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#image_uri LambdaFunction#image_uri}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#s3_bucket LambdaFunction#s3_bucket}

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

The Amazon S3 key of the deployment package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#s3_key LambdaFunction#s3_key}

---

##### `s3ObjectStorageMode`<sup>Optional</sup> <a name="s3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectStorageMode"></a>

```typescript
public readonly s3ObjectStorageMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#s3_object_storage_mode LambdaFunction#s3_object_storage_mode}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

For versioned objects, the version of the deployment package object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#s3_object_version LambdaFunction#s3_object_version}

---

##### `sourceKmsKeyArn`<sup>Optional</sup> <a name="sourceKmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.sourceKmsKeyArn"></a>

```typescript
public readonly sourceKmsKeyArn: string;
```

- *Type:* string

The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#source_kms_key_arn LambdaFunction#source_kms_key_arn}

---

##### `zipFile`<sup>Optional</sup> <a name="zipFile" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.zipFile"></a>

```typescript
public readonly zipFile: string;
```

- *Type:* string

(Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.   When you specify source code inline for a Node.js function, the ``index`` file that CFN creates uses the extension ``.js``. This means that Node.js treats the file as a CommonJS module.  When using Node.js 24 or later, Node.js can automatically detect if a ``.js`` file should be treated as CommonJS or as an ES module. To enable auto-detection, add the ``--experimental-detect-module`` flag to the ``NODE_OPTIONS`` environment variable. For more information, see [Experimental Node.js features](https://docs.aws.amazon.com//lambda/latest/dg/lambda-nodejs.html#nodejs-experimental-features).    For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.  If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#zip_file LambdaFunction#zip_file}

---

### LambdaFunctionConfig <a name="LambdaFunctionConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionConfig: lambdaFunction.LambdaFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a></code> | The code for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.role">role</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the function's execution role. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.architectures">architectures</a></code> | <code>string[]</code> | The instruction set architecture that the function supports. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.capacityProviderConfig">capacityProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a></code> | Configuration for the capacity provider that manages compute resources for Lambda functions. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn">codeSigningConfigArn</a></code> | <code>string</code> | To enable code signing for this function, specify the ARN of a code-signing configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.durableConfig">durableConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a></code> | Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout and retention period for execution history. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | Environment variables that are accessible from function code during execution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | The size of the function's ``/tmp`` directory in MB. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfigs">fileSystemConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]</code> | Connection settings for an Amazon EFS or Amazon S3 Files file system. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionName">functionName</a></code> | <code>string</code> | The name of the Lambda function, up to 64 characters in length. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionScalingConfig">functionScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a></code> | Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.handler">handler</a></code> | <code>string</code> | The name of the method within your code that Lambda calls to run your function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:   +  The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).   +  The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.   +  When used with ``SourceKMSKeyArn``, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).   +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).     If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.layers">layers</a></code> | <code>string[]</code> | A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a></code> | The function's Amazon CloudWatch Logs configuration settings. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.packageType">packageType</a></code> | <code>string</code> | The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.publishToLatestPublished">publishToLatestPublished</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#publish_to_latest_published LambdaFunction#publish_to_latest_published}. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.recursiveLoop">recursiveLoop</a></code> | <code>string</code> | The status of your function's recursive loop detection configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The number of simultaneous executions to reserve for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtime">runtime</a></code> | <code>string</code> | The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.  The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).  For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtimeManagementConfig">runtimeManagementConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a></code> | Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.snapStart">snapStart</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]</code> | A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.   You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tenancyConfig">tenancyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a></code> | The function's tenant isolation configuration settings. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.timeout">timeout</a></code> | <code>number</code> | The amount of time (in seconds) that Lambda allows a function to run before stopping it. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tracingConfig">tracingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.code"></a>

```typescript
public readonly code: LambdaFunctionCode;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

The code for the function.

You can define your function code in multiple ways:
  +  For .zip deployment packages, you can specify the S3 location of the .zip file in the ``S3Bucket``, ``S3Key``, and ``S3ObjectVersion`` properties.
  +  For .zip deployment packages, you can alternatively define the function code inline in the ``ZipFile`` property. This method works only for Node.js and Python functions.
  +  For container images, specify the URI of your container image in the ECR registry in the ``ImageUri`` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#code LambdaFunction#code}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the function's execution role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#role LambdaFunction#role}

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.architectures"></a>

```typescript
public readonly architectures: string[];
```

- *Type:* string[]

The instruction set architecture that the function supports.

Enter a string array with one of the valid values (arm64 or x86_64). The default value is ``x86_64``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#architectures LambdaFunction#architectures}

---

##### `capacityProviderConfig`<sup>Optional</sup> <a name="capacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.capacityProviderConfig"></a>

```typescript
public readonly capacityProviderConfig: LambdaFunctionCapacityProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

Configuration for the capacity provider that manages compute resources for Lambda functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#capacity_provider_config LambdaFunction#capacity_provider_config}

---

##### `codeSigningConfigArn`<sup>Optional</sup> <a name="codeSigningConfigArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn"></a>

```typescript
public readonly codeSigningConfigArn: string;
```

- *Type:* string

To enable code signing for this function, specify the ARN of a code-signing configuration.

A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: LambdaFunctionDeadLetterConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing.

For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#description LambdaFunction#description}

---

##### `durableConfig`<sup>Optional</sup> <a name="durableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.durableConfig"></a>

```typescript
public readonly durableConfig: LambdaFunctionDurableConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout and retention period for execution history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#durable_config LambdaFunction#durable_config}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.environment"></a>

```typescript
public readonly environment: LambdaFunctionEnvironment;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

Environment variables that are accessible from function code during execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#environment LambdaFunction#environment}

---

##### `ephemeralStorage`<sup>Optional</sup> <a name="ephemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: LambdaFunctionEphemeralStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

The size of the function's ``/tmp`` directory in MB.

The default value is 512, but it can be any whole number between 512 and 10,240 MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}

---

##### `fileSystemConfigs`<sup>Optional</sup> <a name="fileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfigs"></a>

```typescript
public readonly fileSystemConfigs: IResolvable | LambdaFunctionFileSystemConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]

Connection settings for an Amazon EFS or Amazon S3 Files file system.

To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) or [AWS::S3Files::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-mounttarget.html) resource, you must also specify a ``DependsOn`` attribute to ensure that the mount target is created or updated before the function.
 For more information about using the ``DependsOn`` attribute, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#file_system_configs LambdaFunction#file_system_configs}

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

The name of the Lambda function, up to 64 characters in length.

If you don't specify a name, CFN generates one.
 If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#function_name LambdaFunction#function_name}

---

##### `functionScalingConfig`<sup>Optional</sup> <a name="functionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionScalingConfig"></a>

```typescript
public readonly functionScalingConfig: LambdaFunctionFunctionScalingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#function_scaling_config LambdaFunction#function_scaling_config}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

The name of the method within your code that Lambda calls to run your function.

Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#handler LambdaFunction#handler}

---

##### `imageConfig`<sup>Optional</sup> <a name="imageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.imageConfig"></a>

```typescript
public readonly imageConfig: LambdaFunctionImageConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#image_config LambdaFunction#image_config}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:   +  The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).   +  The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.   +  When used with ``SourceKMSKeyArn``, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).   +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).     If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.layers"></a>

```typescript
public readonly layers: string[];
```

- *Type:* string[]

A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#layers LambdaFunction#layers}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: LambdaFunctionLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

The function's Amazon CloudWatch Logs configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#logging_config LambdaFunction#logging_config}

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#memory_size LambdaFunction#memory_size}

---

##### `packageType`<sup>Optional</sup> <a name="packageType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.packageType"></a>

```typescript
public readonly packageType: string;
```

- *Type:* string

The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#package_type LambdaFunction#package_type}

---

##### `publishToLatestPublished`<sup>Optional</sup> <a name="publishToLatestPublished" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.publishToLatestPublished"></a>

```typescript
public readonly publishToLatestPublished: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#publish_to_latest_published LambdaFunction#publish_to_latest_published}.

---

##### `recursiveLoop`<sup>Optional</sup> <a name="recursiveLoop" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.recursiveLoop"></a>

```typescript
public readonly recursiveLoop: string;
```

- *Type:* string

The status of your function's recursive loop detection configuration.

When this value is set to ``Allow``and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.
 When this value is set to ``Terminate`` and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#recursive_loop LambdaFunction#recursive_loop}

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number

The number of simultaneous executions to reserve for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.  The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).  For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#runtime LambdaFunction#runtime}

---

##### `runtimeManagementConfig`<sup>Optional</sup> <a name="runtimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtimeManagementConfig"></a>

```typescript
public readonly runtimeManagementConfig: LambdaFunctionRuntimeManagementConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#runtime_management_config LambdaFunction#runtime_management_config}

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.snapStart"></a>

```typescript
public readonly snapStart: LambdaFunctionSnapStart;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#snap_start LambdaFunction#snap_start}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LambdaFunctionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]

A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.   You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#tags LambdaFunction#tags}

---

##### `tenancyConfig`<sup>Optional</sup> <a name="tenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tenancyConfig"></a>

```typescript
public readonly tenancyConfig: LambdaFunctionTenancyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

The function's tenant isolation configuration settings.

Determines whether the Lambda function runs on a shared or dedicated infrastructure per unique tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#tenancy_config LambdaFunction#tenancy_config}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

The amount of time (in seconds) that Lambda allows a function to run before stopping it.

The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#timeout LambdaFunction#timeout}

---

##### `tracingConfig`<sup>Optional</sup> <a name="tracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tracingConfig"></a>

```typescript
public readonly tracingConfig: LambdaFunctionTracingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#tracing_config LambdaFunction#tracing_config}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: LambdaFunctionVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.

When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#vpc_config LambdaFunction#vpc_config}

---

### LambdaFunctionDeadLetterConfig <a name="LambdaFunctionDeadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionDeadLetterConfig: lambdaFunction.LambdaFunctionDeadLetterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn">targetArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic. |

---

##### `targetArn`<sup>Optional</sup> <a name="targetArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#target_arn LambdaFunction#target_arn}

---

### LambdaFunctionDurableConfig <a name="LambdaFunctionDurableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionDurableConfig: lambdaFunction.LambdaFunctionDurableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.executionTimeout">executionTimeout</a></code> | <code>number</code> | The maximum time (in seconds) that a durable execution can run before timing out. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | The number of days to retain execution history after a durable execution completes. |

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: number;
```

- *Type:* number

The maximum time (in seconds) that a durable execution can run before timing out.

This timeout applies to the entire durable execution, not individual function invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#execution_timeout LambdaFunction#execution_timeout}

---

##### `retentionPeriodInDays`<sup>Optional</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

The number of days to retain execution history after a durable execution completes.

After this period, execution history is no longer available through the GetDurableExecutionHistory API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#retention_period_in_days LambdaFunction#retention_period_in_days}

---

### LambdaFunctionEnvironment <a name="LambdaFunctionEnvironment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionEnvironment: lambdaFunction.LambdaFunctionEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | Environment variable key-value pairs. |

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variable key-value pairs.

For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).
 If the value of the environment variable is a time or a duration, enclose the value in quotes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#variables LambdaFunction#variables}

---

### LambdaFunctionEphemeralStorage <a name="LambdaFunctionEphemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionEphemeralStorage: lambdaFunction.LambdaFunctionEphemeralStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage.property.size">size</a></code> | <code>number</code> | The size of the function's ``/tmp`` directory. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

The size of the function's ``/tmp`` directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#size LambdaFunction#size}

---

### LambdaFunctionFileSystemConfigs <a name="LambdaFunctionFileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionFileSystemConfigs: lambdaFunction.LambdaFunctionFileSystemConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.arn">arn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon EFS or Amazon S3 Files access point that provides access to the file system. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.localMountPath">localMountPath</a></code> | <code>string</code> | The path where the function can access the file system, starting with ``/mnt/``. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon EFS or Amazon S3 Files access point that provides access to the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#arn LambdaFunction#arn}

---

##### `localMountPath`<sup>Optional</sup> <a name="localMountPath" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.localMountPath"></a>

```typescript
public readonly localMountPath: string;
```

- *Type:* string

The path where the function can access the file system, starting with ``/mnt/``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#local_mount_path LambdaFunction#local_mount_path}

---

### LambdaFunctionFunctionScalingConfig <a name="LambdaFunctionFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionFunctionScalingConfig: lambdaFunction.LambdaFunctionFunctionScalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.maxExecutionEnvironments">maxExecutionEnvironments</a></code> | <code>number</code> | The maximum number of execution environments that can be provisioned for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.minExecutionEnvironments">minExecutionEnvironments</a></code> | <code>number</code> | The minimum number of execution environments to maintain for the function. |

---

##### `maxExecutionEnvironments`<sup>Optional</sup> <a name="maxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.maxExecutionEnvironments"></a>

```typescript
public readonly maxExecutionEnvironments: number;
```

- *Type:* number

The maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#max_execution_environments LambdaFunction#max_execution_environments}

---

##### `minExecutionEnvironments`<sup>Optional</sup> <a name="minExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.minExecutionEnvironments"></a>

```typescript
public readonly minExecutionEnvironments: number;
```

- *Type:* number

The minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#min_execution_environments LambdaFunction#min_execution_environments}

---

### LambdaFunctionImageConfig <a name="LambdaFunctionImageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionImageConfig: lambdaFunction.LambdaFunctionImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.command">command</a></code> | <code>string[]</code> | Specifies parameters that you want to pass in with ENTRYPOINT. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint">entryPoint</a></code> | <code>string[]</code> | Specifies the entry point to their application, which is typically the location of the runtime executable. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies the working directory. The length of the directory string cannot exceed 1,000 characters. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Specifies parameters that you want to pass in with ENTRYPOINT.

You can specify a maximum of 1,500 parameters in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#command LambdaFunction#command}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint"></a>

```typescript
public readonly entryPoint: string[];
```

- *Type:* string[]

Specifies the entry point to their application, which is typically the location of the runtime executable.

You can specify a maximum of 1,500 string entries in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#entry_point LambdaFunction#entry_point}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies the working directory. The length of the directory string cannot exceed 1,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#working_directory LambdaFunction#working_directory}

---

### LambdaFunctionLoggingConfig <a name="LambdaFunctionLoggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionLoggingConfig: lambdaFunction.LambdaFunctionLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Set this property to filter the application logs for your function that Lambda sends to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logFormat">logFormat</a></code> | <code>string</code> | The format in which Lambda sends your function's application and system logs to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logGroup">logGroup</a></code> | <code>string</code> | The name of the Amazon CloudWatch log group the function sends logs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Set this property to filter the system logs for your function that Lambda sends to CloudWatch. |

---

##### `applicationLogLevel`<sup>Optional</sup> <a name="applicationLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string

Set this property to filter the application logs for your function that Lambda sends to CloudWatch.

Lambda only sends application logs at the selected level of detail and lower, where ``TRACE`` is the highest level and ``FATAL`` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#application_log_level LambdaFunction#application_log_level}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

The format in which Lambda sends your function's application and system logs to CloudWatch.

Select between plain text and structured JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#log_format LambdaFunction#log_format}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

The name of the Amazon CloudWatch log group the function sends logs to.

By default, Lambda functions send logs to a default log group named ``/aws/lambda/<function name>``. To use a different log group, enter an existing log group or enter a new log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#log_group LambdaFunction#log_group}

---

##### `systemLogLevel`<sup>Optional</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string

Set this property to filter the system logs for your function that Lambda sends to CloudWatch.

Lambda only sends system logs at the selected level of detail and lower, where ``DEBUG`` is the highest level and ``WARN`` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#system_log_level LambdaFunction#system_log_level}

---

### LambdaFunctionRuntimeManagementConfig <a name="LambdaFunctionRuntimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionRuntimeManagementConfig: lambdaFunction.LambdaFunctionRuntimeManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>string</code> | The ARN of the runtime version you want the function to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.updateRuntimeOn">updateRuntimeOn</a></code> | <code>string</code> | Specify the runtime update mode. |

---

##### `runtimeVersionArn`<sup>Optional</sup> <a name="runtimeVersionArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.runtimeVersionArn"></a>

```typescript
public readonly runtimeVersionArn: string;
```

- *Type:* string

The ARN of the runtime version you want the function to use.

This is only required if you're using the *Manual* runtime update mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#runtime_version_arn LambdaFunction#runtime_version_arn}

---

##### `updateRuntimeOn`<sup>Optional</sup> <a name="updateRuntimeOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.updateRuntimeOn"></a>

```typescript
public readonly updateRuntimeOn: string;
```

- *Type:* string

Specify the runtime update mode.

+  *Auto (default)* - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.
  +  *FunctionUpdate* - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
  +  *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).
  
 *Valid Values*: ``Auto`` | ``FunctionUpdate`` | ``Manual``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#update_runtime_on LambdaFunction#update_runtime_on}

---

### LambdaFunctionSnapStart <a name="LambdaFunctionSnapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionSnapStart: lambdaFunction.LambdaFunctionSnapStart = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart.property.applyOn">applyOn</a></code> | <code>string</code> | Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version. |

---

##### `applyOn`<sup>Optional</sup> <a name="applyOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart.property.applyOn"></a>

```typescript
public readonly applyOn: string;
```

- *Type:* string

Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#apply_on LambdaFunction#apply_on}

---

### LambdaFunctionSnapStartResponse <a name="LambdaFunctionSnapStartResponse" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionSnapStartResponse: lambdaFunction.LambdaFunctionSnapStartResponse = { ... }
```


### LambdaFunctionTags <a name="LambdaFunctionTags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionTags: lambdaFunction.LambdaFunctionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.key">key</a></code> | <code>string</code> | The key for this tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.value">value</a></code> | <code>string</code> | The value for this tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#key LambdaFunction#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#value LambdaFunction#value}

---

### LambdaFunctionTenancyConfig <a name="LambdaFunctionTenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionTenancyConfig: lambdaFunction.LambdaFunctionTenancyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig.property.tenantIsolationMode">tenantIsolationMode</a></code> | <code>string</code> | Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID. |

---

##### `tenantIsolationMode`<sup>Optional</sup> <a name="tenantIsolationMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig.property.tenantIsolationMode"></a>

```typescript
public readonly tenantIsolationMode: string;
```

- *Type:* string

Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#tenant_isolation_mode LambdaFunction#tenant_isolation_mode}

---

### LambdaFunctionTracingConfig <a name="LambdaFunctionTracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionTracingConfig: lambdaFunction.LambdaFunctionTracingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig.property.mode">mode</a></code> | <code>string</code> | The tracing mode. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The tracing mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#mode LambdaFunction#mode}

---

### LambdaFunctionVpcConfig <a name="LambdaFunctionVpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

const lambdaFunctionVpcConfig: lambdaFunction.LambdaFunctionVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>boolean \| cdktn.IResolvable</code> | Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | A list of VPC security group IDs. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | A list of VPC subnet IDs. |

---

##### `ipv6AllowedForDualStack`<sup>Optional</sup> <a name="ipv6AllowedForDualStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#ipv_6_allowed_for_dual_stack LambdaFunction#ipv_6_allowed_for_dual_stack}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

A list of VPC security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#security_group_ids LambdaFunction#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

A list of VPC subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#subnet_ids LambdaFunction#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference <a name="LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetCapacityProviderArn">resetCapacityProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetExecutionEnvironmentMemoryGiBPerVCpu">resetExecutionEnvironmentMemoryGiBPerVCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetPerExecutionEnvironmentMaxConcurrency">resetPerExecutionEnvironmentMaxConcurrency</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacityProviderArn` <a name="resetCapacityProviderArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetCapacityProviderArn"></a>

```typescript
public resetCapacityProviderArn(): void
```

##### `resetExecutionEnvironmentMemoryGiBPerVCpu` <a name="resetExecutionEnvironmentMemoryGiBPerVCpu" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetExecutionEnvironmentMemoryGiBPerVCpu"></a>

```typescript
public resetExecutionEnvironmentMemoryGiBPerVCpu(): void
```

##### `resetPerExecutionEnvironmentMaxConcurrency` <a name="resetPerExecutionEnvironmentMaxConcurrency" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetPerExecutionEnvironmentMaxConcurrency"></a>

```typescript
public resetPerExecutionEnvironmentMaxConcurrency(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArnInput">capacityProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpuInput">executionEnvironmentMemoryGiBPerVCpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrencyInput">perExecutionEnvironmentMaxConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArn">capacityProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpu">executionEnvironmentMemoryGiBPerVCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrency">perExecutionEnvironmentMaxConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityProviderArnInput`<sup>Optional</sup> <a name="capacityProviderArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArnInput"></a>

```typescript
public readonly capacityProviderArnInput: string;
```

- *Type:* string

---

##### `executionEnvironmentMemoryGiBPerVCpuInput`<sup>Optional</sup> <a name="executionEnvironmentMemoryGiBPerVCpuInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpuInput"></a>

```typescript
public readonly executionEnvironmentMemoryGiBPerVCpuInput: number;
```

- *Type:* number

---

##### `perExecutionEnvironmentMaxConcurrencyInput`<sup>Optional</sup> <a name="perExecutionEnvironmentMaxConcurrencyInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrencyInput"></a>

```typescript
public readonly perExecutionEnvironmentMaxConcurrencyInput: number;
```

- *Type:* number

---

##### `capacityProviderArn`<sup>Required</sup> <a name="capacityProviderArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArn"></a>

```typescript
public readonly capacityProviderArn: string;
```

- *Type:* string

---

##### `executionEnvironmentMemoryGiBPerVCpu`<sup>Required</sup> <a name="executionEnvironmentMemoryGiBPerVCpu" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpu"></a>

```typescript
public readonly executionEnvironmentMemoryGiBPerVCpu: number;
```

- *Type:* number

---

##### `perExecutionEnvironmentMaxConcurrency`<sup>Required</sup> <a name="perExecutionEnvironmentMaxConcurrency" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrency"></a>

```typescript
public readonly perExecutionEnvironmentMaxConcurrency: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

---


### LambdaFunctionCapacityProviderConfigOutputReference <a name="LambdaFunctionCapacityProviderConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig">putLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resetLambdaManagedInstancesCapacityProviderConfig">resetLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaManagedInstancesCapacityProviderConfig` <a name="putLambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig"></a>

```typescript
public putLambdaManagedInstancesCapacityProviderConfig(value: LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

---

##### `resetLambdaManagedInstancesCapacityProviderConfig` <a name="resetLambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resetLambdaManagedInstancesCapacityProviderConfig"></a>

```typescript
public resetLambdaManagedInstancesCapacityProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfig">lambdaManagedInstancesCapacityProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfigInput">lambdaManagedInstancesCapacityProviderConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaManagedInstancesCapacityProviderConfig`<sup>Required</sup> <a name="lambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfig"></a>

```typescript
public readonly lambdaManagedInstancesCapacityProviderConfig: LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference</a>

---

##### `lambdaManagedInstancesCapacityProviderConfigInput`<sup>Optional</sup> <a name="lambdaManagedInstancesCapacityProviderConfigInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfigInput"></a>

```typescript
public readonly lambdaManagedInstancesCapacityProviderConfigInput: IResolvable | LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionCapacityProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

---


### LambdaFunctionCodeOutputReference <a name="LambdaFunctionCodeOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionCodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectStorageMode">resetS3ObjectStorageMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetSourceKmsKeyArn">resetSourceKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetZipFile">resetZipFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetImageUri"></a>

```typescript
public resetImageUri(): void
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Key"></a>

```typescript
public resetS3Key(): void
```

##### `resetS3ObjectStorageMode` <a name="resetS3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectStorageMode"></a>

```typescript
public resetS3ObjectStorageMode(): void
```

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectVersion"></a>

```typescript
public resetS3ObjectVersion(): void
```

##### `resetSourceKmsKeyArn` <a name="resetSourceKmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetSourceKmsKeyArn"></a>

```typescript
public resetSourceKmsKeyArn(): void
```

##### `resetZipFile` <a name="resetZipFile" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetZipFile"></a>

```typescript
public resetZipFile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageModeInput">s3ObjectStorageModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArnInput">sourceKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFileInput">zipFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageMode">s3ObjectStorageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArn">sourceKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFile">zipFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUriInput"></a>

```typescript
public readonly imageUriInput: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3ObjectStorageModeInput`<sup>Optional</sup> <a name="s3ObjectStorageModeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageModeInput"></a>

```typescript
public readonly s3ObjectStorageModeInput: string;
```

- *Type:* string

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersionInput"></a>

```typescript
public readonly s3ObjectVersionInput: string;
```

- *Type:* string

---

##### `sourceKmsKeyArnInput`<sup>Optional</sup> <a name="sourceKmsKeyArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArnInput"></a>

```typescript
public readonly sourceKmsKeyArnInput: string;
```

- *Type:* string

---

##### `zipFileInput`<sup>Optional</sup> <a name="zipFileInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFileInput"></a>

```typescript
public readonly zipFileInput: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `s3ObjectStorageMode`<sup>Required</sup> <a name="s3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageMode"></a>

```typescript
public readonly s3ObjectStorageMode: string;
```

- *Type:* string

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

---

##### `sourceKmsKeyArn`<sup>Required</sup> <a name="sourceKmsKeyArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArn"></a>

```typescript
public readonly sourceKmsKeyArn: string;
```

- *Type:* string

---

##### `zipFile`<sup>Required</sup> <a name="zipFile" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFile"></a>

```typescript
public readonly zipFile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionCode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

---


### LambdaFunctionDeadLetterConfigOutputReference <a name="LambdaFunctionDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resetTargetArn">resetTargetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetArn` <a name="resetTargetArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resetTargetArn"></a>

```typescript
public resetTargetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput">targetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput"></a>

```typescript
public readonly targetArnInput: string;
```

- *Type:* string

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionDeadLetterConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---


### LambdaFunctionDurableConfigOutputReference <a name="LambdaFunctionDurableConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionDurableConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetRetentionPeriodInDays">resetRetentionPeriodInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetExecutionTimeout"></a>

```typescript
public resetExecutionTimeout(): void
```

##### `resetRetentionPeriodInDays` <a name="resetRetentionPeriodInDays" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetRetentionPeriodInDays"></a>

```typescript
public resetRetentionPeriodInDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDaysInput">retentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeout">executionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeoutInput"></a>

```typescript
public readonly executionTimeoutInput: number;
```

- *Type:* number

---

##### `retentionPeriodInDaysInput`<sup>Optional</sup> <a name="retentionPeriodInDaysInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDaysInput"></a>

```typescript
public readonly retentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: number;
```

- *Type:* number

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionDurableConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

---


### LambdaFunctionEnvironmentOutputReference <a name="LambdaFunctionEnvironmentOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables"></a>

```typescript
public resetVariables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput">variablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput"></a>

```typescript
public readonly variablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionEnvironment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---


### LambdaFunctionEphemeralStorageOutputReference <a name="LambdaFunctionEphemeralStorageOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionEphemeralStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSize` <a name="resetSize" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionEphemeralStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---


### LambdaFunctionFileSystemConfigsList <a name="LambdaFunctionFileSystemConfigsList" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionFileSystemConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.get"></a>

```typescript
public get(index: number): LambdaFunctionFileSystemConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionFileSystemConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>[]

---


### LambdaFunctionFileSystemConfigsOutputReference <a name="LambdaFunctionFileSystemConfigsOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetLocalMountPath">resetLocalMountPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetLocalMountPath` <a name="resetLocalMountPath" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetLocalMountPath"></a>

```typescript
public resetLocalMountPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPathInput">localMountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPath">localMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `localMountPathInput`<sup>Optional</sup> <a name="localMountPathInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPathInput"></a>

```typescript
public readonly localMountPathInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `localMountPath`<sup>Required</sup> <a name="localMountPath" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPath"></a>

```typescript
public readonly localMountPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionFileSystemConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>

---


### LambdaFunctionFunctionScalingConfigOutputReference <a name="LambdaFunctionFunctionScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments">resetMaxExecutionEnvironments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments">resetMinExecutionEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxExecutionEnvironments` <a name="resetMaxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments"></a>

```typescript
public resetMaxExecutionEnvironments(): void
```

##### `resetMinExecutionEnvironments` <a name="resetMinExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments"></a>

```typescript
public resetMinExecutionEnvironments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput">maxExecutionEnvironmentsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput">minExecutionEnvironmentsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments">maxExecutionEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironments">minExecutionEnvironments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxExecutionEnvironmentsInput`<sup>Optional</sup> <a name="maxExecutionEnvironmentsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput"></a>

```typescript
public readonly maxExecutionEnvironmentsInput: number;
```

- *Type:* number

---

##### `minExecutionEnvironmentsInput`<sup>Optional</sup> <a name="minExecutionEnvironmentsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput"></a>

```typescript
public readonly minExecutionEnvironmentsInput: number;
```

- *Type:* number

---

##### `maxExecutionEnvironments`<sup>Required</sup> <a name="maxExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments"></a>

```typescript
public readonly maxExecutionEnvironments: number;
```

- *Type:* number

---

##### `minExecutionEnvironments`<sup>Required</sup> <a name="minExecutionEnvironments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironments"></a>

```typescript
public readonly minExecutionEnvironments: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionFunctionScalingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

---


### LambdaFunctionImageConfigOutputReference <a name="LambdaFunctionImageConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint"></a>

```typescript
public resetEntryPoint(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint">entryPoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput"></a>

```typescript
public readonly entryPointInput: string[];
```

- *Type:* string[]

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint"></a>

```typescript
public readonly entryPoint: string[];
```

- *Type:* string[]

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionImageConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---


### LambdaFunctionLoggingConfigOutputReference <a name="LambdaFunctionLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetApplicationLogLevel">resetApplicationLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetSystemLogLevel">resetSystemLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationLogLevel` <a name="resetApplicationLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetApplicationLogLevel"></a>

```typescript
public resetApplicationLogLevel(): void
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```

##### `resetSystemLogLevel` <a name="resetSystemLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetSystemLogLevel"></a>

```typescript
public resetSystemLogLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevelInput">applicationLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevelInput">systemLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogLevelInput`<sup>Optional</sup> <a name="applicationLogLevelInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevelInput"></a>

```typescript
public readonly applicationLogLevelInput: string;
```

- *Type:* string

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `systemLogLevelInput`<sup>Optional</sup> <a name="systemLogLevelInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```typescript
public readonly systemLogLevelInput: string;
```

- *Type:* string

---

##### `applicationLogLevel`<sup>Required</sup> <a name="applicationLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevel"></a>

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `systemLogLevel`<sup>Required</sup> <a name="systemLogLevel" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevel"></a>

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

---


### LambdaFunctionRuntimeManagementConfigOutputReference <a name="LambdaFunctionRuntimeManagementConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetRuntimeVersionArn">resetRuntimeVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetUpdateRuntimeOn">resetUpdateRuntimeOn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRuntimeVersionArn` <a name="resetRuntimeVersionArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetRuntimeVersionArn"></a>

```typescript
public resetRuntimeVersionArn(): void
```

##### `resetUpdateRuntimeOn` <a name="resetUpdateRuntimeOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetUpdateRuntimeOn"></a>

```typescript
public resetUpdateRuntimeOn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArnInput">runtimeVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOnInput">updateRuntimeOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArn">runtimeVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOn">updateRuntimeOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `runtimeVersionArnInput`<sup>Optional</sup> <a name="runtimeVersionArnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArnInput"></a>

```typescript
public readonly runtimeVersionArnInput: string;
```

- *Type:* string

---

##### `updateRuntimeOnInput`<sup>Optional</sup> <a name="updateRuntimeOnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOnInput"></a>

```typescript
public readonly updateRuntimeOnInput: string;
```

- *Type:* string

---

##### `runtimeVersionArn`<sup>Required</sup> <a name="runtimeVersionArn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArn"></a>

```typescript
public readonly runtimeVersionArn: string;
```

- *Type:* string

---

##### `updateRuntimeOn`<sup>Required</sup> <a name="updateRuntimeOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOn"></a>

```typescript
public readonly updateRuntimeOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionRuntimeManagementConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

---


### LambdaFunctionSnapStartOutputReference <a name="LambdaFunctionSnapStartOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionSnapStartOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resetApplyOn">resetApplyOn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplyOn` <a name="resetApplyOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resetApplyOn"></a>

```typescript
public resetApplyOn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput">applyOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn">applyOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyOnInput`<sup>Optional</sup> <a name="applyOnInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput"></a>

```typescript
public readonly applyOnInput: string;
```

- *Type:* string

---

##### `applyOn`<sup>Required</sup> <a name="applyOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn"></a>

```typescript
public readonly applyOn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionSnapStart;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---


### LambdaFunctionSnapStartResponseOutputReference <a name="LambdaFunctionSnapStartResponseOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionSnapStartResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.applyOn">applyOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.optimizationStatus">optimizationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse">LambdaFunctionSnapStartResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applyOn`<sup>Required</sup> <a name="applyOn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.applyOn"></a>

```typescript
public readonly applyOn: string;
```

- *Type:* string

---

##### `optimizationStatus`<sup>Required</sup> <a name="optimizationStatus" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.optimizationStatus"></a>

```typescript
public readonly optimizationStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LambdaFunctionSnapStartResponse;
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse">LambdaFunctionSnapStartResponse</a>

---


### LambdaFunctionTagsList <a name="LambdaFunctionTagsList" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.get"></a>

```typescript
public get(index: number): LambdaFunctionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>[]

---


### LambdaFunctionTagsOutputReference <a name="LambdaFunctionTagsOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>

---


### LambdaFunctionTenancyConfigOutputReference <a name="LambdaFunctionTenancyConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionTenancyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resetTenantIsolationMode">resetTenantIsolationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTenantIsolationMode` <a name="resetTenantIsolationMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resetTenantIsolationMode"></a>

```typescript
public resetTenantIsolationMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationModeInput">tenantIsolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationMode">tenantIsolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tenantIsolationModeInput`<sup>Optional</sup> <a name="tenantIsolationModeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationModeInput"></a>

```typescript
public readonly tenantIsolationModeInput: string;
```

- *Type:* string

---

##### `tenantIsolationMode`<sup>Required</sup> <a name="tenantIsolationMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationMode"></a>

```typescript
public readonly tenantIsolationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionTenancyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

---


### LambdaFunctionTracingConfigOutputReference <a name="LambdaFunctionTracingConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionTracingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionTracingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---


### LambdaFunctionVpcConfigOutputReference <a name="LambdaFunctionVpcConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer"></a>

```typescript
import { lambdaFunction } from '@cdktn/provider-awscc'

new lambdaFunction.LambdaFunctionVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetIpv6AllowedForDualStack">resetIpv6AllowedForDualStack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6AllowedForDualStack` <a name="resetIpv6AllowedForDualStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetIpv6AllowedForDualStack"></a>

```typescript
public resetIpv6AllowedForDualStack(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStackInput">ipv6AllowedForDualStackInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6AllowedForDualStackInput`<sup>Optional</sup> <a name="ipv6AllowedForDualStackInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStackInput"></a>

```typescript
public readonly ipv6AllowedForDualStackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `ipv6AllowedForDualStack`<sup>Required</sup> <a name="ipv6AllowedForDualStack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaFunctionVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---



