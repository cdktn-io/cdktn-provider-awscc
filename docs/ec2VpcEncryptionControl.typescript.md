# `ec2VpcEncryptionControl` Submodule <a name="`ec2VpcEncryptionControl` Submodule" id="@cdktn/provider-awscc.ec2VpcEncryptionControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEncryptionControl <a name="Ec2VpcEncryptionControl" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control awscc_ec2_vpc_encryption_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControl(scope: Construct, id: string, config?: Ec2VpcEncryptionControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig">Ec2VpcEncryptionControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig">Ec2VpcEncryptionControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusionInput">resetEgressOnlyInternetGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetElasticFileSystemExclusionInput">resetElasticFileSystemExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetInternetGatewayExclusionInput">resetInternetGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetLambdaExclusionInput">resetLambdaExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetNatGatewayExclusionInput">resetNatGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVirtualPrivateGatewayExclusionInput">resetVirtualPrivateGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcId">resetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcLatticeExclusionInput">resetVpcLatticeExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcPeeringExclusionInput">resetVpcPeeringExclusionInput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2VpcEncryptionControlTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]

---

##### `resetEgressOnlyInternetGatewayExclusionInput` <a name="resetEgressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusionInput"></a>

```typescript
public resetEgressOnlyInternetGatewayExclusionInput(): void
```

##### `resetElasticFileSystemExclusionInput` <a name="resetElasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetElasticFileSystemExclusionInput"></a>

```typescript
public resetElasticFileSystemExclusionInput(): void
```

##### `resetInternetGatewayExclusionInput` <a name="resetInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetInternetGatewayExclusionInput"></a>

```typescript
public resetInternetGatewayExclusionInput(): void
```

##### `resetLambdaExclusionInput` <a name="resetLambdaExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetLambdaExclusionInput"></a>

```typescript
public resetLambdaExclusionInput(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetNatGatewayExclusionInput` <a name="resetNatGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetNatGatewayExclusionInput"></a>

```typescript
public resetNatGatewayExclusionInput(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVirtualPrivateGatewayExclusionInput` <a name="resetVirtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVirtualPrivateGatewayExclusionInput"></a>

```typescript
public resetVirtualPrivateGatewayExclusionInput(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

##### `resetVpcLatticeExclusionInput` <a name="resetVpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcLatticeExclusionInput"></a>

```typescript
public resetVpcLatticeExclusionInput(): void
```

##### `resetVpcPeeringExclusionInput` <a name="resetVpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcPeeringExclusionInput"></a>

```typescript
public resetVpcPeeringExclusionInput(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEncryptionControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isConstruct"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformElement"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformResource"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VpcEncryptionControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcEncryptionControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcEncryptionControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEncryptionControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.resourceExclusions">resourceExclusions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference">Ec2VpcEncryptionControlResourceExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList">Ec2VpcEncryptionControlTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcEncryptionControlId">vpcEncryptionControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInputInput">egressOnlyInternetGatewayExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInputInput">elasticFileSystemExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInputInput">internetGatewayExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInputInput">lambdaExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInputInput">natGatewayExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInputInput">virtualPrivateGatewayExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInputInput">vpcLatticeExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInputInput">vpcPeeringExclusionInputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput">egressOnlyInternetGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInput">elasticFileSystemExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInput">internetGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInput">lambdaExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInput">natGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput">virtualPrivateGatewayExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInput">vpcLatticeExclusionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInput">vpcPeeringExclusionInput</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceExclusions`<sup>Required</sup> <a name="resourceExclusions" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.resourceExclusions"></a>

```typescript
public readonly resourceExclusions: Ec2VpcEncryptionControlResourceExclusionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference">Ec2VpcEncryptionControlResourceExclusionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tags"></a>

```typescript
public readonly tags: Ec2VpcEncryptionControlTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList">Ec2VpcEncryptionControlTagsList</a>

---

##### `vpcEncryptionControlId`<sup>Required</sup> <a name="vpcEncryptionControlId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcEncryptionControlId"></a>

```typescript
public readonly vpcEncryptionControlId: string;
```

- *Type:* string

---

##### `egressOnlyInternetGatewayExclusionInputInput`<sup>Optional</sup> <a name="egressOnlyInternetGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInputInput"></a>

```typescript
public readonly egressOnlyInternetGatewayExclusionInputInput: string;
```

- *Type:* string

---

##### `elasticFileSystemExclusionInputInput`<sup>Optional</sup> <a name="elasticFileSystemExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInputInput"></a>

```typescript
public readonly elasticFileSystemExclusionInputInput: string;
```

- *Type:* string

---

##### `internetGatewayExclusionInputInput`<sup>Optional</sup> <a name="internetGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInputInput"></a>

```typescript
public readonly internetGatewayExclusionInputInput: string;
```

- *Type:* string

---

##### `lambdaExclusionInputInput`<sup>Optional</sup> <a name="lambdaExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInputInput"></a>

```typescript
public readonly lambdaExclusionInputInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `natGatewayExclusionInputInput`<sup>Optional</sup> <a name="natGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInputInput"></a>

```typescript
public readonly natGatewayExclusionInputInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2VpcEncryptionControlTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]

---

##### `virtualPrivateGatewayExclusionInputInput`<sup>Optional</sup> <a name="virtualPrivateGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInputInput"></a>

```typescript
public readonly virtualPrivateGatewayExclusionInputInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcLatticeExclusionInputInput`<sup>Optional</sup> <a name="vpcLatticeExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInputInput"></a>

```typescript
public readonly vpcLatticeExclusionInputInput: string;
```

- *Type:* string

---

##### `vpcPeeringExclusionInputInput`<sup>Optional</sup> <a name="vpcPeeringExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInputInput"></a>

```typescript
public readonly vpcPeeringExclusionInputInput: string;
```

- *Type:* string

---

##### `egressOnlyInternetGatewayExclusionInput`<sup>Required</sup> <a name="egressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput"></a>

```typescript
public readonly egressOnlyInternetGatewayExclusionInput: string;
```

- *Type:* string

---

##### `elasticFileSystemExclusionInput`<sup>Required</sup> <a name="elasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInput"></a>

```typescript
public readonly elasticFileSystemExclusionInput: string;
```

- *Type:* string

---

##### `internetGatewayExclusionInput`<sup>Required</sup> <a name="internetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInput"></a>

```typescript
public readonly internetGatewayExclusionInput: string;
```

- *Type:* string

---

##### `lambdaExclusionInput`<sup>Required</sup> <a name="lambdaExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInput"></a>

```typescript
public readonly lambdaExclusionInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `natGatewayExclusionInput`<sup>Required</sup> <a name="natGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInput"></a>

```typescript
public readonly natGatewayExclusionInput: string;
```

- *Type:* string

---

##### `virtualPrivateGatewayExclusionInput`<sup>Required</sup> <a name="virtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput"></a>

```typescript
public readonly virtualPrivateGatewayExclusionInput: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcLatticeExclusionInput`<sup>Required</sup> <a name="vpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInput"></a>

```typescript
public readonly vpcLatticeExclusionInput: string;
```

- *Type:* string

---

##### `vpcPeeringExclusionInput`<sup>Required</sup> <a name="vpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInput"></a>

```typescript
public readonly vpcPeeringExclusionInput: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEncryptionControlConfig <a name="Ec2VpcEncryptionControlConfig" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlConfig: ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusionInput">egressOnlyInternetGatewayExclusionInput</a></code> | <code>string</code> | Used to enable or disable EIGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.elasticFileSystemExclusionInput">elasticFileSystemExclusionInput</a></code> | <code>string</code> | Used to enable or disable EFS exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.internetGatewayExclusionInput">internetGatewayExclusionInput</a></code> | <code>string</code> | Used to enable or disable IGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lambdaExclusionInput">lambdaExclusionInput</a></code> | <code>string</code> | Used to enable or disable Lambda exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.mode">mode</a></code> | <code>string</code> | The VPC encryption control mode, either monitor or enforce. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.natGatewayExclusionInput">natGatewayExclusionInput</a></code> | <code>string</code> | Used to enable or disable Nat gateway exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]</code> | The tags to assign to the VPC encryption control. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusionInput">virtualPrivateGatewayExclusionInput</a></code> | <code>string</code> | Used to enable or disable VGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The VPC on which this VPC encryption control is applied. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcLatticeExclusionInput">vpcLatticeExclusionInput</a></code> | <code>string</code> | Used to enable or disable Vpc Lattice exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcPeeringExclusionInput">vpcPeeringExclusionInput</a></code> | <code>string</code> | Used to enable or disable VPC peering exclusion. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `egressOnlyInternetGatewayExclusionInput`<sup>Optional</sup> <a name="egressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusionInput"></a>

```typescript
public readonly egressOnlyInternetGatewayExclusionInput: string;
```

- *Type:* string

Used to enable or disable EIGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#egress_only_internet_gateway_exclusion_input Ec2VpcEncryptionControl#egress_only_internet_gateway_exclusion_input}

---

##### `elasticFileSystemExclusionInput`<sup>Optional</sup> <a name="elasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.elasticFileSystemExclusionInput"></a>

```typescript
public readonly elasticFileSystemExclusionInput: string;
```

- *Type:* string

Used to enable or disable EFS exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#elastic_file_system_exclusion_input Ec2VpcEncryptionControl#elastic_file_system_exclusion_input}

---

##### `internetGatewayExclusionInput`<sup>Optional</sup> <a name="internetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.internetGatewayExclusionInput"></a>

```typescript
public readonly internetGatewayExclusionInput: string;
```

- *Type:* string

Used to enable or disable IGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#internet_gateway_exclusion_input Ec2VpcEncryptionControl#internet_gateway_exclusion_input}

---

##### `lambdaExclusionInput`<sup>Optional</sup> <a name="lambdaExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lambdaExclusionInput"></a>

```typescript
public readonly lambdaExclusionInput: string;
```

- *Type:* string

Used to enable or disable Lambda exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#lambda_exclusion_input Ec2VpcEncryptionControl#lambda_exclusion_input}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The VPC encryption control mode, either monitor or enforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#mode Ec2VpcEncryptionControl#mode}

---

##### `natGatewayExclusionInput`<sup>Optional</sup> <a name="natGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.natGatewayExclusionInput"></a>

```typescript
public readonly natGatewayExclusionInput: string;
```

- *Type:* string

Used to enable or disable Nat gateway exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#nat_gateway_exclusion_input Ec2VpcEncryptionControl#nat_gateway_exclusion_input}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2VpcEncryptionControlTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]

The tags to assign to the VPC encryption control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#tags Ec2VpcEncryptionControl#tags}

---

##### `virtualPrivateGatewayExclusionInput`<sup>Optional</sup> <a name="virtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusionInput"></a>

```typescript
public readonly virtualPrivateGatewayExclusionInput: string;
```

- *Type:* string

Used to enable or disable VGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#virtual_private_gateway_exclusion_input Ec2VpcEncryptionControl#virtual_private_gateway_exclusion_input}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The VPC on which this VPC encryption control is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#vpc_id Ec2VpcEncryptionControl#vpc_id}

---

##### `vpcLatticeExclusionInput`<sup>Optional</sup> <a name="vpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcLatticeExclusionInput"></a>

```typescript
public readonly vpcLatticeExclusionInput: string;
```

- *Type:* string

Used to enable or disable Vpc Lattice exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#vpc_lattice_exclusion_input Ec2VpcEncryptionControl#vpc_lattice_exclusion_input}

---

##### `vpcPeeringExclusionInput`<sup>Optional</sup> <a name="vpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcPeeringExclusionInput"></a>

```typescript
public readonly vpcPeeringExclusionInput: string;
```

- *Type:* string

Used to enable or disable VPC peering exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#vpc_peering_exclusion_input Ec2VpcEncryptionControl#vpc_peering_exclusion_input}

---

### Ec2VpcEncryptionControlResourceExclusions <a name="Ec2VpcEncryptionControlResourceExclusions" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlResourceExclusions: ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions = { ... }
```


### Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway <a name="Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway: ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway = { ... }
```


### Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem <a name="Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlResourceExclusionsElasticFileSystem: ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem = { ... }
```


### Ec2VpcEncryptionControlResourceExclusionsInternetGateway <a name="Ec2VpcEncryptionControlResourceExclusionsInternetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlResourceExclusionsInternetGateway: ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway = { ... }
```


### Ec2VpcEncryptionControlResourceExclusionsLambda <a name="Ec2VpcEncryptionControlResourceExclusionsLambda" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlResourceExclusionsLambda: ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda = { ... }
```


### Ec2VpcEncryptionControlResourceExclusionsNatGateway <a name="Ec2VpcEncryptionControlResourceExclusionsNatGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlResourceExclusionsNatGateway: ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway = { ... }
```


### Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway <a name="Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway: ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway = { ... }
```


### Ec2VpcEncryptionControlResourceExclusionsVpcLattice <a name="Ec2VpcEncryptionControlResourceExclusionsVpcLattice" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlResourceExclusionsVpcLattice: ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice = { ... }
```


### Ec2VpcEncryptionControlResourceExclusionsVpcPeering <a name="Ec2VpcEncryptionControlResourceExclusionsVpcPeering" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlResourceExclusionsVpcPeering: ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering = { ... }
```


### Ec2VpcEncryptionControlTags <a name="Ec2VpcEncryptionControlTags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

const ec2VpcEncryptionControlTags: ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#key Ec2VpcEncryptionControl#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#value Ec2VpcEncryptionControl#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem</a>

---


### Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway">Ec2VpcEncryptionControlResourceExclusionsInternetGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcEncryptionControlResourceExclusionsInternetGateway;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway">Ec2VpcEncryptionControlResourceExclusionsInternetGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda">Ec2VpcEncryptionControlResourceExclusionsLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcEncryptionControlResourceExclusionsLambda;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda">Ec2VpcEncryptionControlResourceExclusionsLambda</a>

---


### Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway">Ec2VpcEncryptionControlResourceExclusionsNatGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcEncryptionControlResourceExclusionsNatGateway;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway">Ec2VpcEncryptionControlResourceExclusionsNatGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway">egressOnlyInternetGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem">elasticFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway">internetGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference">Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway">natGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway">virtualPrivateGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice">vpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering">vpcPeering</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions">Ec2VpcEncryptionControlResourceExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `egressOnlyInternetGateway`<sup>Required</sup> <a name="egressOnlyInternetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway"></a>

```typescript
public readonly egressOnlyInternetGateway: Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a>

---

##### `elasticFileSystem`<sup>Required</sup> <a name="elasticFileSystem" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem"></a>

```typescript
public readonly elasticFileSystem: Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a>

---

##### `internetGateway`<sup>Required</sup> <a name="internetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway"></a>

```typescript
public readonly internetGateway: Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.lambda"></a>

```typescript
public readonly lambda: Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference">Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference</a>

---

##### `natGateway`<sup>Required</sup> <a name="natGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway"></a>

```typescript
public readonly natGateway: Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a>

---

##### `virtualPrivateGateway`<sup>Required</sup> <a name="virtualPrivateGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway"></a>

```typescript
public readonly virtualPrivateGateway: Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a>

---

##### `vpcLattice`<sup>Required</sup> <a name="vpcLattice" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice"></a>

```typescript
public readonly vpcLattice: Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a>

---

##### `vpcPeering`<sup>Required</sup> <a name="vpcPeering" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering"></a>

```typescript
public readonly vpcPeering: Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcEncryptionControlResourceExclusions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions">Ec2VpcEncryptionControlResourceExclusions</a>

---


### Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice">Ec2VpcEncryptionControlResourceExclusionsVpcLattice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcEncryptionControlResourceExclusionsVpcLattice;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice">Ec2VpcEncryptionControlResourceExclusionsVpcLattice</a>

---


### Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering">Ec2VpcEncryptionControlResourceExclusionsVpcPeering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2VpcEncryptionControlResourceExclusionsVpcPeering;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering">Ec2VpcEncryptionControlResourceExclusionsVpcPeering</a>

---


### Ec2VpcEncryptionControlTagsList <a name="Ec2VpcEncryptionControlTagsList" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.get"></a>

```typescript
public get(index: number): Ec2VpcEncryptionControlTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpcEncryptionControlTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>[]

---


### Ec2VpcEncryptionControlTagsOutputReference <a name="Ec2VpcEncryptionControlTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer"></a>

```typescript
import { ec2VpcEncryptionControl } from '@cdktn/provider-awscc'

new ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpcEncryptionControlTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>

---



