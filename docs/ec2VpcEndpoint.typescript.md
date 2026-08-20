# `ec2VpcEndpoint` Submodule <a name="`ec2VpcEndpoint` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpoint <a name="Ec2VpcEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint awscc_ec2_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

new ec2VpcEndpoint.Ec2VpcEndpoint(scope: Construct, id: string, config: Ec2VpcEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig">Ec2VpcEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig">Ec2VpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions">putDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetDnsOptions">resetDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPrivateDnsEnabled">resetPrivateDnsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetResourceConfigurationArn">resetResourceConfigurationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetRouteTableIds">resetRouteTableIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceNetworkArn">resetServiceNetworkArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceRegion">resetServiceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetVpcEndpointType">resetVpcEndpointType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDnsOptions` <a name="putDnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions"></a>

```typescript
public putDnsOptions(value: Ec2VpcEndpointDnsOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putDnsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2VpcEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>[]

---

##### `resetDnsOptions` <a name="resetDnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetDnsOptions"></a>

```typescript
public resetDnsOptions(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```

##### `resetPrivateDnsEnabled` <a name="resetPrivateDnsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetPrivateDnsEnabled"></a>

```typescript
public resetPrivateDnsEnabled(): void
```

##### `resetResourceConfigurationArn` <a name="resetResourceConfigurationArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetResourceConfigurationArn"></a>

```typescript
public resetResourceConfigurationArn(): void
```

##### `resetRouteTableIds` <a name="resetRouteTableIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetRouteTableIds"></a>

```typescript
public resetRouteTableIds(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceName"></a>

```typescript
public resetServiceName(): void
```

##### `resetServiceNetworkArn` <a name="resetServiceNetworkArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceNetworkArn"></a>

```typescript
public resetServiceNetworkArn(): void
```

##### `resetServiceRegion` <a name="resetServiceRegion" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetServiceRegion"></a>

```typescript
public resetServiceRegion(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcEndpointType` <a name="resetVpcEndpointType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.resetVpcEndpointType"></a>

```typescript
public resetVpcEndpointType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsEntries">dnsEntries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference">Ec2VpcEndpointDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList">Ec2VpcEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptionsInput">dnsOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabledInput">privateDnsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArnInput">resourceConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIdsInput">routeTableIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArnInput">serviceNetworkArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegionInput">serviceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointTypeInput">vpcEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegion">serviceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointType">vpcEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `dnsEntries`<sup>Required</sup> <a name="dnsEntries" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsEntries"></a>

```typescript
public readonly dnsEntries: string[];
```

- *Type:* string[]

---

##### `dnsOptions`<sup>Required</sup> <a name="dnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptions"></a>

```typescript
public readonly dnsOptions: Ec2VpcEndpointDnsOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference">Ec2VpcEndpointDnsOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tags"></a>

```typescript
public readonly tags: Ec2VpcEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList">Ec2VpcEndpointTagsList</a>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `dnsOptionsInput`<sup>Optional</sup> <a name="dnsOptionsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.dnsOptionsInput"></a>

```typescript
public readonly dnsOptionsInput: IResolvable | Ec2VpcEndpointDnsOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `privateDnsEnabledInput`<sup>Optional</sup> <a name="privateDnsEnabledInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabledInput"></a>

```typescript
public readonly privateDnsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceConfigurationArnInput`<sup>Optional</sup> <a name="resourceConfigurationArnInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArnInput"></a>

```typescript
public readonly resourceConfigurationArnInput: string;
```

- *Type:* string

---

##### `routeTableIdsInput`<sup>Optional</sup> <a name="routeTableIdsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIdsInput"></a>

```typescript
public readonly routeTableIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceNetworkArnInput`<sup>Optional</sup> <a name="serviceNetworkArnInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArnInput"></a>

```typescript
public readonly serviceNetworkArnInput: string;
```

- *Type:* string

---

##### `serviceRegionInput`<sup>Optional</sup> <a name="serviceRegionInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegionInput"></a>

```typescript
public readonly serviceRegionInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2VpcEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>[]

---

##### `vpcEndpointTypeInput`<sup>Optional</sup> <a name="vpcEndpointTypeInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointTypeInput"></a>

```typescript
public readonly vpcEndpointTypeInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `privateDnsEnabled`<sup>Required</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.privateDnsEnabled"></a>

```typescript
public readonly privateDnsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceConfigurationArn`<sup>Required</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.resourceConfigurationArn"></a>

```typescript
public readonly resourceConfigurationArn: string;
```

- *Type:* string

---

##### `routeTableIds`<sup>Required</sup> <a name="routeTableIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

---

##### `serviceRegion`<sup>Required</sup> <a name="serviceRegion" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.serviceRegion"></a>

```typescript
public readonly serviceRegion: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcEndpointType`<sup>Required</sup> <a name="vpcEndpointType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcEndpointType"></a>

```typescript
public readonly vpcEndpointType: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointConfig <a name="Ec2VpcEndpointConfig" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.Initializer"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

const ec2VpcEndpointConfig: ec2VpcEndpoint.Ec2VpcEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | Describes the DNS options for an endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | The supported IP address types. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | An endpoint policy, which controls access to the service from the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicate whether to associate a private hosted zone with the specified VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the resource configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.routeTableIds">routeTableIds</a></code> | <code>string[]</code> | The IDs of the route tables. Routing is supported only for gateway endpoints. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The IDs of the security groups to associate with the endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service network. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceRegion">serviceRegion</a></code> | <code>string</code> | Describes a Region. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The IDs of the subnets in which to create endpoint network interfaces. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>[]</code> | The tags to associate with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcEndpointType">vpcEndpointType</a></code> | <code>string</code> | The type of endpoint.  Default: Gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#vpc_id Ec2VpcEndpoint#vpc_id}

---

##### `dnsOptions`<sup>Optional</sup> <a name="dnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.dnsOptions"></a>

```typescript
public readonly dnsOptions: Ec2VpcEndpointDnsOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

Describes the DNS options for an endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#dns_options Ec2VpcEndpoint#dns_options}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

The supported IP address types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#ip_address_type Ec2VpcEndpoint#ip_address_type}

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

An endpoint policy, which controls access to the service from the VPC.

The default endpoint policy allows full access to the service. Endpoint policies are supported only for gateway and interface endpoints.
 For CloudFormation templates in YAML, you can provide the policy in JSON or YAML format. For example, if you have a JSON policy, you can convert it to YAML before including it in the YAML template, and CFNlong converts the policy to JSON format before calling the API actions for privatelink. Alternatively, you can include the JSON directly in the YAML, as shown in the following ``Properties`` section:
 ``Properties: VpcEndpointType: 'Interface' ServiceName: !Sub 'com.amazonaws.${AWS::Region}.logs' PolicyDocument: '{ "Version":"2012-10-17", "Statement": [{ "Effect":"Allow", "Principal":"*", "Action":["logs:Describe*","logs:Get*","logs:List*","logs:FilterLogEvents"], "Resource":"*" }] }'``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#policy_document Ec2VpcEndpoint#policy_document}

---

##### `privateDnsEnabled`<sup>Optional</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.privateDnsEnabled"></a>

```typescript
public readonly privateDnsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicate whether to associate a private hosted zone with the specified VPC.

The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, ``kinesis.us-east-1.amazonaws.com``), which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service.
 To use a private hosted zone, you must set the following VPC attributes to ``true``: ``enableDnsHostnames`` and ``enableDnsSupport``.
 This property is supported only for interface endpoints.
 Default: ``false``

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#private_dns_enabled Ec2VpcEndpoint#private_dns_enabled}

---

##### `resourceConfigurationArn`<sup>Optional</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.resourceConfigurationArn"></a>

```typescript
public readonly resourceConfigurationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#resource_configuration_arn Ec2VpcEndpoint#resource_configuration_arn}

---

##### `routeTableIds`<sup>Optional</sup> <a name="routeTableIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.routeTableIds"></a>

```typescript
public readonly routeTableIds: string[];
```

- *Type:* string[]

The IDs of the route tables. Routing is supported only for gateway endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#route_table_ids Ec2VpcEndpoint#route_table_ids}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The IDs of the security groups to associate with the endpoint network interfaces.

If this parameter is not specified, we use the default security group for the VPC. Security groups are supported only for interface endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#security_group_ids Ec2VpcEndpoint#security_group_ids}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#service_name Ec2VpcEndpoint#service_name}

---

##### `serviceNetworkArn`<sup>Optional</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#service_network_arn Ec2VpcEndpoint#service_network_arn}

---

##### `serviceRegion`<sup>Optional</sup> <a name="serviceRegion" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.serviceRegion"></a>

```typescript
public readonly serviceRegion: string;
```

- *Type:* string

Describes a Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#service_region Ec2VpcEndpoint#service_region}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The IDs of the subnets in which to create endpoint network interfaces.

You must specify this property for an interface endpoint or a Gateway Load Balancer endpoint. You can't specify this property for a gateway endpoint. For a Gateway Load Balancer endpoint, you can specify only one subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#subnet_ids Ec2VpcEndpoint#subnet_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2VpcEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>[]

The tags to associate with the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#tags Ec2VpcEndpoint#tags}

---

##### `vpcEndpointType`<sup>Optional</sup> <a name="vpcEndpointType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointConfig.property.vpcEndpointType"></a>

```typescript
public readonly vpcEndpointType: string;
```

- *Type:* string

The type of endpoint.  Default: Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#vpc_endpoint_type Ec2VpcEndpoint#vpc_endpoint_type}

---

### Ec2VpcEndpointDnsOptions <a name="Ec2VpcEndpointDnsOptions" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.Initializer"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

const ec2VpcEndpointDnsOptions: ec2VpcEndpoint.Ec2VpcEndpointDnsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.dnsRecordIpType">dnsRecordIpType</a></code> | <code>string</code> | The DNS records created for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint">privateDnsOnlyForInboundResolverEndpoint</a></code> | <code>string</code> | Indicates whether to enable private DNS only for inbound endpoints. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsPreference">privateDnsPreference</a></code> | <code>string</code> | The preference for which private domains have a private hosted zone created for and associated with the specified VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsSpecifiedDomains">privateDnsSpecifiedDomains</a></code> | <code>string[]</code> | Indicates which of the private domains to create private hosted zones for and associate with the specified VPC. |

---

##### `dnsRecordIpType`<sup>Optional</sup> <a name="dnsRecordIpType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.dnsRecordIpType"></a>

```typescript
public readonly dnsRecordIpType: string;
```

- *Type:* string

The DNS records created for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#dns_record_ip_type Ec2VpcEndpoint#dns_record_ip_type}

---

##### `privateDnsOnlyForInboundResolverEndpoint`<sup>Optional</sup> <a name="privateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```typescript
public readonly privateDnsOnlyForInboundResolverEndpoint: string;
```

- *Type:* string

Indicates whether to enable private DNS only for inbound endpoints.

This option is available only for services that support both gateway and interface endpoints. It routes traffic that originates from the VPC to the gateway endpoint and traffic that originates from on-premises to the interface endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#private_dns_only_for_inbound_resolver_endpoint Ec2VpcEndpoint#private_dns_only_for_inbound_resolver_endpoint}

---

##### `privateDnsPreference`<sup>Optional</sup> <a name="privateDnsPreference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsPreference"></a>

```typescript
public readonly privateDnsPreference: string;
```

- *Type:* string

The preference for which private domains have a private hosted zone created for and associated with the specified VPC.

Only supported when private DNS is enabled and when the VPC endpoint type is ServiceNetwork or Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#private_dns_preference Ec2VpcEndpoint#private_dns_preference}

---

##### `privateDnsSpecifiedDomains`<sup>Optional</sup> <a name="privateDnsSpecifiedDomains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions.property.privateDnsSpecifiedDomains"></a>

```typescript
public readonly privateDnsSpecifiedDomains: string[];
```

- *Type:* string[]

Indicates which of the private domains to create private hosted zones for and associate with the specified VPC.

Only supported when private DNS is enabled and the private DNS preference is ``VERIFIED_DOMAINS_AND_SPECIFIED_DOMAINS`` or ``SPECIFIED_DOMAINS_ONLY``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#private_dns_specified_domains Ec2VpcEndpoint#private_dns_specified_domains}

---

### Ec2VpcEndpointTags <a name="Ec2VpcEndpointTags" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.Initializer"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

const ec2VpcEndpointTags: ec2VpcEndpoint.Ec2VpcEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.value">value</a></code> | <code>string</code> | The value of the tag.  Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with ``aws:``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#key Ec2VpcEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.  Constraints: Tag values are case-sensitive and accept a maximum of 256 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_endpoint#value Ec2VpcEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcEndpointDnsOptionsOutputReference <a name="Ec2VpcEndpointDnsOptionsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

new ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType">resetDnsRecordIpType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint">resetPrivateDnsOnlyForInboundResolverEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsPreference">resetPrivateDnsPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsSpecifiedDomains">resetPrivateDnsSpecifiedDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsRecordIpType` <a name="resetDnsRecordIpType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetDnsRecordIpType"></a>

```typescript
public resetDnsRecordIpType(): void
```

##### `resetPrivateDnsOnlyForInboundResolverEndpoint` <a name="resetPrivateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsOnlyForInboundResolverEndpoint"></a>

```typescript
public resetPrivateDnsOnlyForInboundResolverEndpoint(): void
```

##### `resetPrivateDnsPreference` <a name="resetPrivateDnsPreference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsPreference"></a>

```typescript
public resetPrivateDnsPreference(): void
```

##### `resetPrivateDnsSpecifiedDomains` <a name="resetPrivateDnsSpecifiedDomains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.resetPrivateDnsSpecifiedDomains"></a>

```typescript
public resetPrivateDnsSpecifiedDomains(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput">dnsRecordIpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput">privateDnsOnlyForInboundResolverEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreferenceInput">privateDnsPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomainsInput">privateDnsSpecifiedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType">dnsRecordIpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint">privateDnsOnlyForInboundResolverEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference">privateDnsPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">privateDnsSpecifiedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsRecordIpTypeInput`<sup>Optional</sup> <a name="dnsRecordIpTypeInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpTypeInput"></a>

```typescript
public readonly dnsRecordIpTypeInput: string;
```

- *Type:* string

---

##### `privateDnsOnlyForInboundResolverEndpointInput`<sup>Optional</sup> <a name="privateDnsOnlyForInboundResolverEndpointInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpointInput"></a>

```typescript
public readonly privateDnsOnlyForInboundResolverEndpointInput: string;
```

- *Type:* string

---

##### `privateDnsPreferenceInput`<sup>Optional</sup> <a name="privateDnsPreferenceInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreferenceInput"></a>

```typescript
public readonly privateDnsPreferenceInput: string;
```

- *Type:* string

---

##### `privateDnsSpecifiedDomainsInput`<sup>Optional</sup> <a name="privateDnsSpecifiedDomainsInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomainsInput"></a>

```typescript
public readonly privateDnsSpecifiedDomainsInput: string[];
```

- *Type:* string[]

---

##### `dnsRecordIpType`<sup>Required</sup> <a name="dnsRecordIpType" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType"></a>

```typescript
public readonly dnsRecordIpType: string;
```

- *Type:* string

---

##### `privateDnsOnlyForInboundResolverEndpoint`<sup>Required</sup> <a name="privateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```typescript
public readonly privateDnsOnlyForInboundResolverEndpoint: string;
```

- *Type:* string

---

##### `privateDnsPreference`<sup>Required</sup> <a name="privateDnsPreference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsPreference"></a>

```typescript
public readonly privateDnsPreference: string;
```

- *Type:* string

---

##### `privateDnsSpecifiedDomains`<sup>Required</sup> <a name="privateDnsSpecifiedDomains" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```typescript
public readonly privateDnsSpecifiedDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpcEndpointDnsOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointDnsOptions">Ec2VpcEndpointDnsOptions</a>

---


### Ec2VpcEndpointTagsList <a name="Ec2VpcEndpointTagsList" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

new ec2VpcEndpoint.Ec2VpcEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get"></a>

```typescript
public get(index: number): Ec2VpcEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpcEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>[]

---


### Ec2VpcEndpointTagsOutputReference <a name="Ec2VpcEndpointTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer"></a>

```typescript
import { ec2VpcEndpoint } from '@cdktn/provider-awscc'

new ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpcEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcEndpoint.Ec2VpcEndpointTags">Ec2VpcEndpointTags</a>

---



