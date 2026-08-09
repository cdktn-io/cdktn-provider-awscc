# `codebuildFleet` Submodule <a name="`codebuildFleet` Submodule" id="@cdktn/provider-awscc.codebuildFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildFleet <a name="CodebuildFleet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet awscc_codebuild_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleet(scope: Construct, id: string, config?: CodebuildFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig">CodebuildFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig">CodebuildFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putComputeConfiguration">putComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetProxyConfiguration">putFleetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetVpcConfig">putFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putScalingConfiguration">putScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetBaseCapacity">resetBaseCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeConfiguration">resetComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetEnvironmentType">resetEnvironmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetProxyConfiguration">resetFleetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetServiceRole">resetFleetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetVpcConfig">resetFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverflowBehavior">resetOverflowBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetScalingConfiguration">resetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComputeConfiguration` <a name="putComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putComputeConfiguration"></a>

```typescript
public putComputeConfiguration(value: CodebuildFleetComputeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putComputeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---

##### `putFleetProxyConfiguration` <a name="putFleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetProxyConfiguration"></a>

```typescript
public putFleetProxyConfiguration(value: CodebuildFleetFleetProxyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetProxyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

---

##### `putFleetVpcConfig` <a name="putFleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetVpcConfig"></a>

```typescript
public putFleetVpcConfig(value: CodebuildFleetFleetVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putFleetVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

---

##### `putScalingConfiguration` <a name="putScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putScalingConfiguration"></a>

```typescript
public putScalingConfiguration(value: CodebuildFleetScalingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putTags"></a>

```typescript
public putTags(value: IResolvable | CodebuildFleetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]

---

##### `resetBaseCapacity` <a name="resetBaseCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetBaseCapacity"></a>

```typescript
public resetBaseCapacity(): void
```

##### `resetComputeConfiguration` <a name="resetComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeConfiguration"></a>

```typescript
public resetComputeConfiguration(): void
```

##### `resetComputeType` <a name="resetComputeType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetComputeType"></a>

```typescript
public resetComputeType(): void
```

##### `resetEnvironmentType` <a name="resetEnvironmentType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetEnvironmentType"></a>

```typescript
public resetEnvironmentType(): void
```

##### `resetFleetProxyConfiguration` <a name="resetFleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetProxyConfiguration"></a>

```typescript
public resetFleetProxyConfiguration(): void
```

##### `resetFleetServiceRole` <a name="resetFleetServiceRole" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetServiceRole"></a>

```typescript
public resetFleetServiceRole(): void
```

##### `resetFleetVpcConfig` <a name="resetFleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetFleetVpcConfig"></a>

```typescript
public resetFleetVpcConfig(): void
```

##### `resetImageId` <a name="resetImageId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOverflowBehavior` <a name="resetOverflowBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetOverflowBehavior"></a>

```typescript
public resetOverflowBehavior(): void
```

##### `resetScalingConfiguration` <a name="resetScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetScalingConfiguration"></a>

```typescript
public resetScalingConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodebuildFleet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isConstruct"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

codebuildFleet.CodebuildFleet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformElement"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

codebuildFleet.CodebuildFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformResource"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

codebuildFleet.CodebuildFleet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

codebuildFleet.CodebuildFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CodebuildFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodebuildFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodebuildFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodebuildFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfiguration">computeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference">CodebuildFleetComputeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfiguration">fleetProxyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference">CodebuildFleetFleetProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfig">fleetVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference">CodebuildFleetFleetVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference">CodebuildFleetScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList">CodebuildFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacityInput">baseCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfigurationInput">computeConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeTypeInput">computeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentTypeInput">environmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfigurationInput">fleetProxyConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRoleInput">fleetServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfigInput">fleetVpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehaviorInput">overflowBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfigurationInput">scalingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacity">baseCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeType">computeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentType">environmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRole">fleetServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehavior">overflowBehavior</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `computeConfiguration`<sup>Required</sup> <a name="computeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfiguration"></a>

```typescript
public readonly computeConfiguration: CodebuildFleetComputeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference">CodebuildFleetComputeConfigurationOutputReference</a>

---

##### `fleetProxyConfiguration`<sup>Required</sup> <a name="fleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfiguration"></a>

```typescript
public readonly fleetProxyConfiguration: CodebuildFleetFleetProxyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference">CodebuildFleetFleetProxyConfigurationOutputReference</a>

---

##### `fleetVpcConfig`<sup>Required</sup> <a name="fleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfig"></a>

```typescript
public readonly fleetVpcConfig: CodebuildFleetFleetVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference">CodebuildFleetFleetVpcConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scalingConfiguration`<sup>Required</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfiguration"></a>

```typescript
public readonly scalingConfiguration: CodebuildFleetScalingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference">CodebuildFleetScalingConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tags"></a>

```typescript
public readonly tags: CodebuildFleetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList">CodebuildFleetTagsList</a>

---

##### `baseCapacityInput`<sup>Optional</sup> <a name="baseCapacityInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacityInput"></a>

```typescript
public readonly baseCapacityInput: number;
```

- *Type:* number

---

##### `computeConfigurationInput`<sup>Optional</sup> <a name="computeConfigurationInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeConfigurationInput"></a>

```typescript
public readonly computeConfigurationInput: IResolvable | CodebuildFleetComputeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeTypeInput"></a>

```typescript
public readonly computeTypeInput: string;
```

- *Type:* string

---

##### `environmentTypeInput`<sup>Optional</sup> <a name="environmentTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentTypeInput"></a>

```typescript
public readonly environmentTypeInput: string;
```

- *Type:* string

---

##### `fleetProxyConfigurationInput`<sup>Optional</sup> <a name="fleetProxyConfigurationInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetProxyConfigurationInput"></a>

```typescript
public readonly fleetProxyConfigurationInput: IResolvable | CodebuildFleetFleetProxyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

---

##### `fleetServiceRoleInput`<sup>Optional</sup> <a name="fleetServiceRoleInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRoleInput"></a>

```typescript
public readonly fleetServiceRoleInput: string;
```

- *Type:* string

---

##### `fleetVpcConfigInput`<sup>Optional</sup> <a name="fleetVpcConfigInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetVpcConfigInput"></a>

```typescript
public readonly fleetVpcConfigInput: IResolvable | CodebuildFleetFleetVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overflowBehaviorInput`<sup>Optional</sup> <a name="overflowBehaviorInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehaviorInput"></a>

```typescript
public readonly overflowBehaviorInput: string;
```

- *Type:* string

---

##### `scalingConfigurationInput`<sup>Optional</sup> <a name="scalingConfigurationInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.scalingConfigurationInput"></a>

```typescript
public readonly scalingConfigurationInput: IResolvable | CodebuildFleetScalingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CodebuildFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]

---

##### `baseCapacity`<sup>Required</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.baseCapacity"></a>

```typescript
public readonly baseCapacity: number;
```

- *Type:* number

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

---

##### `fleetServiceRole`<sup>Required</sup> <a name="fleetServiceRole" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.fleetServiceRole"></a>

```typescript
public readonly fleetServiceRole: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overflowBehavior`<sup>Required</sup> <a name="overflowBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.overflowBehavior"></a>

```typescript
public readonly overflowBehavior: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildFleetComputeConfiguration <a name="CodebuildFleetComputeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

const codebuildFleetComputeConfiguration: codebuildFleet.CodebuildFleetComputeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.disk">disk</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#disk CodebuildFleet#disk}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#instance_type CodebuildFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.machineType">machineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#machine_type CodebuildFleet#machine_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.memory">memory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#memory CodebuildFleet#memory}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.vCpu">vCpu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#v_cpu CodebuildFleet#v_cpu}. |

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.disk"></a>

```typescript
public readonly disk: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#disk CodebuildFleet#disk}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#instance_type CodebuildFleet#instance_type}.

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#machine_type CodebuildFleet#machine_type}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#memory CodebuildFleet#memory}.

---

##### `vCpu`<sup>Optional</sup> <a name="vCpu" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration.property.vCpu"></a>

```typescript
public readonly vCpu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#v_cpu CodebuildFleet#v_cpu}.

---

### CodebuildFleetConfig <a name="CodebuildFleetConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

const codebuildFleetConfig: codebuildFleet.CodebuildFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.baseCapacity">baseCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeConfiguration">computeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeType">computeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.environmentType">environmentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetProxyConfiguration">fleetProxyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#fleet_proxy_configuration CodebuildFleet#fleet_proxy_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetServiceRole">fleetServiceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetVpcConfig">fleetVpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#fleet_vpc_config CodebuildFleet#fleet_vpc_config}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.overflowBehavior">overflowBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.scalingConfiguration">scalingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `baseCapacity`<sup>Optional</sup> <a name="baseCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.baseCapacity"></a>

```typescript
public readonly baseCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}.

---

##### `computeConfiguration`<sup>Optional</sup> <a name="computeConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeConfiguration"></a>

```typescript
public readonly computeConfiguration: CodebuildFleetComputeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}.

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}.

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.environmentType"></a>

```typescript
public readonly environmentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}.

---

##### `fleetProxyConfiguration`<sup>Optional</sup> <a name="fleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetProxyConfiguration"></a>

```typescript
public readonly fleetProxyConfiguration: CodebuildFleetFleetProxyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#fleet_proxy_configuration CodebuildFleet#fleet_proxy_configuration}.

---

##### `fleetServiceRole`<sup>Optional</sup> <a name="fleetServiceRole" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetServiceRole"></a>

```typescript
public readonly fleetServiceRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}.

---

##### `fleetVpcConfig`<sup>Optional</sup> <a name="fleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.fleetVpcConfig"></a>

```typescript
public readonly fleetVpcConfig: CodebuildFleetFleetVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#fleet_vpc_config CodebuildFleet#fleet_vpc_config}.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}.

---

##### `overflowBehavior`<sup>Optional</sup> <a name="overflowBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.overflowBehavior"></a>

```typescript
public readonly overflowBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}.

---

##### `scalingConfiguration`<sup>Optional</sup> <a name="scalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.scalingConfiguration"></a>

```typescript
public readonly scalingConfiguration: CodebuildFleetScalingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CodebuildFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}.

---

### CodebuildFleetFleetProxyConfiguration <a name="CodebuildFleetFleetProxyConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

const codebuildFleetFleetProxyConfiguration: codebuildFleet.CodebuildFleetFleetProxyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.defaultBehavior">defaultBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#default_behavior CodebuildFleet#default_behavior}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.orderedProxyRules">orderedProxyRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#ordered_proxy_rules CodebuildFleet#ordered_proxy_rules}. |

---

##### `defaultBehavior`<sup>Optional</sup> <a name="defaultBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.defaultBehavior"></a>

```typescript
public readonly defaultBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#default_behavior CodebuildFleet#default_behavior}.

---

##### `orderedProxyRules`<sup>Optional</sup> <a name="orderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration.property.orderedProxyRules"></a>

```typescript
public readonly orderedProxyRules: IResolvable | CodebuildFleetFleetProxyConfigurationOrderedProxyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#ordered_proxy_rules CodebuildFleet#ordered_proxy_rules}.

---

### CodebuildFleetFleetProxyConfigurationOrderedProxyRules <a name="CodebuildFleetFleetProxyConfigurationOrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

const codebuildFleetFleetProxyConfigurationOrderedProxyRules: codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#effect CodebuildFleet#effect}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.entities">entities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#entities CodebuildFleet#entities}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#type CodebuildFleet#type}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#effect CodebuildFleet#effect}.

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.entities"></a>

```typescript
public readonly entities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#entities CodebuildFleet#entities}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#type CodebuildFleet#type}.

---

### CodebuildFleetFleetVpcConfig <a name="CodebuildFleetFleetVpcConfig" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

const codebuildFleetFleetVpcConfig: codebuildFleet.CodebuildFleetFleetVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#security_group_ids CodebuildFleet#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#subnets CodebuildFleet#subnets}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#vpc_id CodebuildFleet#vpc_id}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#security_group_ids CodebuildFleet#security_group_ids}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#subnets CodebuildFleet#subnets}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#vpc_id CodebuildFleet#vpc_id}.

---

### CodebuildFleetScalingConfiguration <a name="CodebuildFleetScalingConfiguration" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

const codebuildFleetScalingConfiguration: codebuildFleet.CodebuildFleetScalingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#max_capacity CodebuildFleet#max_capacity}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.scalingType">scalingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#scaling_type CodebuildFleet#scaling_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.targetTrackingScalingConfigs">targetTrackingScalingConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#target_tracking_scaling_configs CodebuildFleet#target_tracking_scaling_configs}. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#max_capacity CodebuildFleet#max_capacity}.

---

##### `scalingType`<sup>Optional</sup> <a name="scalingType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.scalingType"></a>

```typescript
public readonly scalingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#scaling_type CodebuildFleet#scaling_type}.

---

##### `targetTrackingScalingConfigs`<sup>Optional</sup> <a name="targetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration.property.targetTrackingScalingConfigs"></a>

```typescript
public readonly targetTrackingScalingConfigs: IResolvable | CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#target_tracking_scaling_configs CodebuildFleet#target_tracking_scaling_configs}.

---

### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

const codebuildFleetScalingConfigurationTargetTrackingScalingConfigs: codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.metricType">metricType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#metric_type CodebuildFleet#metric_type}. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.targetValue">targetValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#target_value CodebuildFleet#target_value}. |

---

##### `metricType`<sup>Optional</sup> <a name="metricType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#metric_type CodebuildFleet#metric_type}.

---

##### `targetValue`<sup>Optional</sup> <a name="targetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#target_value CodebuildFleet#target_value}.

---

### CodebuildFleetTags <a name="CodebuildFleetTags" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

const codebuildFleetTags: codebuildFleet.CodebuildFleetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#key CodebuildFleet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/codebuild_fleet#value CodebuildFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildFleetComputeConfigurationOutputReference <a name="CodebuildFleetComputeConfigurationOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleetComputeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetVCpu">resetVCpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisk` <a name="resetDisk" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetDisk"></a>

```typescript
public resetDisk(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetVCpu` <a name="resetVCpu" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.resetVCpu"></a>

```typescript
public resetVCpu(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.diskInput">diskInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpuInput">vCpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.disk">disk</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpu">vCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.diskInput"></a>

```typescript
public readonly diskInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `vCpuInput`<sup>Optional</sup> <a name="vCpuInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpuInput"></a>

```typescript
public readonly vCpuInput: number;
```

- *Type:* number

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.disk"></a>

```typescript
public readonly disk: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `vCpu`<sup>Required</sup> <a name="vCpu" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.vCpu"></a>

```typescript
public readonly vCpu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildFleetComputeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetComputeConfiguration">CodebuildFleetComputeConfiguration</a>

---


### CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList <a name="CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get"></a>

```typescript
public get(index: number): CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildFleetFleetProxyConfigurationOrderedProxyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]

---


### CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference <a name="CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEntities">resetEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEffect"></a>

```typescript
public resetEffect(): void
```

##### `resetEntities` <a name="resetEntities" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetEntities"></a>

```typescript
public resetEntities(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entitiesInput">entitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entities">entities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entitiesInput"></a>

```typescript
public readonly entitiesInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.entities"></a>

```typescript
public readonly entities: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildFleetFleetProxyConfigurationOrderedProxyRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>

---


### CodebuildFleetFleetProxyConfigurationOutputReference <a name="CodebuildFleetFleetProxyConfigurationOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.putOrderedProxyRules">putOrderedProxyRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetDefaultBehavior">resetDefaultBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetOrderedProxyRules">resetOrderedProxyRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrderedProxyRules` <a name="putOrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.putOrderedProxyRules"></a>

```typescript
public putOrderedProxyRules(value: IResolvable | CodebuildFleetFleetProxyConfigurationOrderedProxyRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.putOrderedProxyRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]

---

##### `resetDefaultBehavior` <a name="resetDefaultBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetDefaultBehavior"></a>

```typescript
public resetDefaultBehavior(): void
```

##### `resetOrderedProxyRules` <a name="resetOrderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.resetOrderedProxyRules"></a>

```typescript
public resetOrderedProxyRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRules">orderedProxyRules</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList">CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehaviorInput">defaultBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRulesInput">orderedProxyRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehavior">defaultBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `orderedProxyRules`<sup>Required</sup> <a name="orderedProxyRules" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRules"></a>

```typescript
public readonly orderedProxyRules: CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList">CodebuildFleetFleetProxyConfigurationOrderedProxyRulesList</a>

---

##### `defaultBehaviorInput`<sup>Optional</sup> <a name="defaultBehaviorInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehaviorInput"></a>

```typescript
public readonly defaultBehaviorInput: string;
```

- *Type:* string

---

##### `orderedProxyRulesInput`<sup>Optional</sup> <a name="orderedProxyRulesInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.orderedProxyRulesInput"></a>

```typescript
public readonly orderedProxyRulesInput: IResolvable | CodebuildFleetFleetProxyConfigurationOrderedProxyRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOrderedProxyRules">CodebuildFleetFleetProxyConfigurationOrderedProxyRules</a>[]

---

##### `defaultBehavior`<sup>Required</sup> <a name="defaultBehavior" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.defaultBehavior"></a>

```typescript
public readonly defaultBehavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildFleetFleetProxyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetProxyConfiguration">CodebuildFleetFleetProxyConfiguration</a>

---


### CodebuildFleetFleetVpcConfigOutputReference <a name="CodebuildFleetFleetVpcConfigOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildFleetFleetVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetFleetVpcConfig">CodebuildFleetFleetVpcConfig</a>

---


### CodebuildFleetScalingConfigurationOutputReference <a name="CodebuildFleetScalingConfigurationOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleetScalingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs">putTargetTrackingScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetScalingType">resetScalingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetTargetTrackingScalingConfigs">resetTargetTrackingScalingConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetTrackingScalingConfigs` <a name="putTargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs"></a>

```typescript
public putTargetTrackingScalingConfigs(value: IResolvable | CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.putTargetTrackingScalingConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]

---

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetScalingType` <a name="resetScalingType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetScalingType"></a>

```typescript
public resetScalingType(): void
```

##### `resetTargetTrackingScalingConfigs` <a name="resetTargetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.resetTargetTrackingScalingConfigs"></a>

```typescript
public resetTargetTrackingScalingConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs">targetTrackingScalingConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingTypeInput">scalingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigsInput">targetTrackingScalingConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingType">scalingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetTrackingScalingConfigs`<sup>Required</sup> <a name="targetTrackingScalingConfigs" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigs"></a>

```typescript
public readonly targetTrackingScalingConfigs: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList</a>

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `scalingTypeInput`<sup>Optional</sup> <a name="scalingTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingTypeInput"></a>

```typescript
public readonly scalingTypeInput: string;
```

- *Type:* string

---

##### `targetTrackingScalingConfigsInput`<sup>Optional</sup> <a name="targetTrackingScalingConfigsInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.targetTrackingScalingConfigsInput"></a>

```typescript
public readonly targetTrackingScalingConfigsInput: IResolvable | CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `scalingType`<sup>Required</sup> <a name="scalingType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.scalingType"></a>

```typescript
public readonly scalingType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildFleetScalingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfiguration">CodebuildFleetScalingConfiguration</a>

---


### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get"></a>

```typescript
public get(index: number): CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>[]

---


### CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference <a name="CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetMetricType">resetMetricType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetTargetValue">resetTargetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricType` <a name="resetMetricType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetMetricType"></a>

```typescript
public resetMetricType(): void
```

##### `resetTargetValue` <a name="resetTargetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.resetTargetValue"></a>

```typescript
public resetTargetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricTypeInput">metricTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValueInput">targetValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType">metricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue">targetValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricTypeInput`<sup>Optional</sup> <a name="metricTypeInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricTypeInput"></a>

```typescript
public readonly metricTypeInput: string;
```

- *Type:* string

---

##### `targetValueInput`<sup>Optional</sup> <a name="targetValueInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValueInput"></a>

```typescript
public readonly targetValueInput: number;
```

- *Type:* number

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.metricType"></a>

```typescript
public readonly metricType: string;
```

- *Type:* string

---

##### `targetValue`<sup>Required</sup> <a name="targetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.targetValue"></a>

```typescript
public readonly targetValue: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs">CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs</a>

---


### CodebuildFleetTagsList <a name="CodebuildFleetTagsList" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.get"></a>

```typescript
public get(index: number): CodebuildFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildFleetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>[]

---


### CodebuildFleetTagsOutputReference <a name="CodebuildFleetTagsOutputReference" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer"></a>

```typescript
import { codebuildFleet } from '@cdktn/provider-awscc'

new codebuildFleet.CodebuildFleetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildFleetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codebuildFleet.CodebuildFleetTags">CodebuildFleetTags</a>

---



