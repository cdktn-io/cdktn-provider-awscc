# `networkfirewallFirewall` Submodule <a name="`networkfirewallFirewall` Submodule" id="@cdktn/provider-awscc.networkfirewallFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallFirewall <a name="NetworkfirewallFirewall" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall awscc_networkfirewall_firewall}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

new networkfirewallFirewall.NetworkfirewallFirewall(scope: Construct, id: string, config: NetworkfirewallFirewallConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig">NetworkfirewallFirewallConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig">NetworkfirewallFirewallConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putAvailabilityZoneMappings">putAvailabilityZoneMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMappings">putSubnetMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetAvailabilityZoneChangeProtection">resetAvailabilityZoneChangeProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetAvailabilityZoneMappings">resetAvailabilityZoneMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetDeleteProtection">resetDeleteProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetEnabledAnalysisTypes">resetEnabledAnalysisTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetFirewallPolicyChangeProtection">resetFirewallPolicyChangeProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetChangeProtection">resetSubnetChangeProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetMappings">resetSubnetMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAvailabilityZoneMappings` <a name="putAvailabilityZoneMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putAvailabilityZoneMappings"></a>

```typescript
public putAvailabilityZoneMappings(value: IResolvable | NetworkfirewallFirewallAvailabilityZoneMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putAvailabilityZoneMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>[]

---

##### `putSubnetMappings` <a name="putSubnetMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMappings"></a>

```typescript
public putSubnetMappings(value: IResolvable | NetworkfirewallFirewallSubnetMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putSubnetMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putTags"></a>

```typescript
public putTags(value: IResolvable | NetworkfirewallFirewallTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>[]

---

##### `resetAvailabilityZoneChangeProtection` <a name="resetAvailabilityZoneChangeProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetAvailabilityZoneChangeProtection"></a>

```typescript
public resetAvailabilityZoneChangeProtection(): void
```

##### `resetAvailabilityZoneMappings` <a name="resetAvailabilityZoneMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetAvailabilityZoneMappings"></a>

```typescript
public resetAvailabilityZoneMappings(): void
```

##### `resetDeleteProtection` <a name="resetDeleteProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetDeleteProtection"></a>

```typescript
public resetDeleteProtection(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabledAnalysisTypes` <a name="resetEnabledAnalysisTypes" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetEnabledAnalysisTypes"></a>

```typescript
public resetEnabledAnalysisTypes(): void
```

##### `resetFirewallPolicyChangeProtection` <a name="resetFirewallPolicyChangeProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetFirewallPolicyChangeProtection"></a>

```typescript
public resetFirewallPolicyChangeProtection(): void
```

##### `resetSubnetChangeProtection` <a name="resetSubnetChangeProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetChangeProtection"></a>

```typescript
public resetSubnetChangeProtection(): void
```

##### `resetSubnetMappings` <a name="resetSubnetMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetSubnetMappings"></a>

```typescript
public resetSubnetMappings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetTransitGatewayId"></a>

```typescript
public resetTransitGatewayId(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallFirewall resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

networkfirewallFirewall.NetworkfirewallFirewall.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworkfirewallFirewall resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkfirewallFirewall to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkfirewallFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneMappings">availabilityZoneMappings</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList">NetworkfirewallFirewallAvailabilityZoneMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.endpointIds">endpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallArn">firewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallId">firewallId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappings">subnetMappings</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList">NetworkfirewallFirewallSubnetMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList">NetworkfirewallFirewallTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneChangeProtectionInput">availabilityZoneChangeProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneMappingsInput">availabilityZoneMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtectionInput">deleteProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.enabledAnalysisTypesInput">enabledAnalysisTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallNameInput">firewallNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArnInput">firewallPolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtectionInput">firewallPolicyChangeProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtectionInput">subnetChangeProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappingsInput">subnetMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneChangeProtection">availabilityZoneChangeProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtection">deleteProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.enabledAnalysisTypes">enabledAnalysisTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallName">firewallName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArn">firewallPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtection">firewallPolicyChangeProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtection">subnetChangeProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `availabilityZoneMappings`<sup>Required</sup> <a name="availabilityZoneMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneMappings"></a>

```typescript
public readonly availabilityZoneMappings: NetworkfirewallFirewallAvailabilityZoneMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList">NetworkfirewallFirewallAvailabilityZoneMappingsList</a>

---

##### `endpointIds`<sup>Required</sup> <a name="endpointIds" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.endpointIds"></a>

```typescript
public readonly endpointIds: string[];
```

- *Type:* string[]

---

##### `firewallArn`<sup>Required</sup> <a name="firewallArn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

---

##### `firewallId`<sup>Required</sup> <a name="firewallId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallId"></a>

```typescript
public readonly firewallId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subnetMappings`<sup>Required</sup> <a name="subnetMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappings"></a>

```typescript
public readonly subnetMappings: NetworkfirewallFirewallSubnetMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList">NetworkfirewallFirewallSubnetMappingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tags"></a>

```typescript
public readonly tags: NetworkfirewallFirewallTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList">NetworkfirewallFirewallTagsList</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

##### `availabilityZoneChangeProtectionInput`<sup>Optional</sup> <a name="availabilityZoneChangeProtectionInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneChangeProtectionInput"></a>

```typescript
public readonly availabilityZoneChangeProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `availabilityZoneMappingsInput`<sup>Optional</sup> <a name="availabilityZoneMappingsInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneMappingsInput"></a>

```typescript
public readonly availabilityZoneMappingsInput: IResolvable | NetworkfirewallFirewallAvailabilityZoneMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>[]

---

##### `deleteProtectionInput`<sup>Optional</sup> <a name="deleteProtectionInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtectionInput"></a>

```typescript
public readonly deleteProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledAnalysisTypesInput`<sup>Optional</sup> <a name="enabledAnalysisTypesInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.enabledAnalysisTypesInput"></a>

```typescript
public readonly enabledAnalysisTypesInput: string[];
```

- *Type:* string[]

---

##### `firewallNameInput`<sup>Optional</sup> <a name="firewallNameInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallNameInput"></a>

```typescript
public readonly firewallNameInput: string;
```

- *Type:* string

---

##### `firewallPolicyArnInput`<sup>Optional</sup> <a name="firewallPolicyArnInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArnInput"></a>

```typescript
public readonly firewallPolicyArnInput: string;
```

- *Type:* string

---

##### `firewallPolicyChangeProtectionInput`<sup>Optional</sup> <a name="firewallPolicyChangeProtectionInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtectionInput"></a>

```typescript
public readonly firewallPolicyChangeProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subnetChangeProtectionInput`<sup>Optional</sup> <a name="subnetChangeProtectionInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtectionInput"></a>

```typescript
public readonly subnetChangeProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subnetMappingsInput`<sup>Optional</sup> <a name="subnetMappingsInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetMappingsInput"></a>

```typescript
public readonly subnetMappingsInput: IResolvable | NetworkfirewallFirewallSubnetMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NetworkfirewallFirewallTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>[]

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `availabilityZoneChangeProtection`<sup>Required</sup> <a name="availabilityZoneChangeProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.availabilityZoneChangeProtection"></a>

```typescript
public readonly availabilityZoneChangeProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deleteProtection`<sup>Required</sup> <a name="deleteProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.deleteProtection"></a>

```typescript
public readonly deleteProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabledAnalysisTypes`<sup>Required</sup> <a name="enabledAnalysisTypes" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.enabledAnalysisTypes"></a>

```typescript
public readonly enabledAnalysisTypes: string[];
```

- *Type:* string[]

---

##### `firewallName`<sup>Required</sup> <a name="firewallName" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallName"></a>

```typescript
public readonly firewallName: string;
```

- *Type:* string

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="firewallPolicyArn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyArn"></a>

```typescript
public readonly firewallPolicyArn: string;
```

- *Type:* string

---

##### `firewallPolicyChangeProtection`<sup>Required</sup> <a name="firewallPolicyChangeProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.firewallPolicyChangeProtection"></a>

```typescript
public readonly firewallPolicyChangeProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subnetChangeProtection`<sup>Required</sup> <a name="subnetChangeProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.subnetChangeProtection"></a>

```typescript
public readonly subnetChangeProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewall.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallFirewallAvailabilityZoneMappings <a name="NetworkfirewallFirewallAvailabilityZoneMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

const networkfirewallFirewallAvailabilityZoneMappings: networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | A AvailabilityZone. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

A AvailabilityZone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#availability_zone NetworkfirewallFirewall#availability_zone}

---

### NetworkfirewallFirewallConfig <a name="NetworkfirewallFirewallConfig" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

const networkfirewallFirewallConfig: networkfirewallFirewall.NetworkfirewallFirewallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallName">firewallName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#firewall_name NetworkfirewallFirewall#firewall_name}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyArn">firewallPolicyArn</a></code> | <code>string</code> | A resource ARN. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.availabilityZoneChangeProtection">availabilityZoneChangeProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#availability_zone_change_protection NetworkfirewallFirewall#availability_zone_change_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.availabilityZoneMappings">availabilityZoneMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#availability_zone_mappings NetworkfirewallFirewall#availability_zone_mappings}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.deleteProtection">deleteProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#description NetworkfirewallFirewall#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.enabledAnalysisTypes">enabledAnalysisTypes</a></code> | <code>string[]</code> | The types of analysis to enable for the firewall. Can be TLS_SNI, HTTP_HOST, or both. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyChangeProtection">firewallPolicyChangeProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetChangeProtection">subnetChangeProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetMappings">subnetMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#subnet_mappings NetworkfirewallFirewall#subnet_mappings}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#transit_gateway_id NetworkfirewallFirewall#transit_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `firewallName`<sup>Required</sup> <a name="firewallName" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallName"></a>

```typescript
public readonly firewallName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#firewall_name NetworkfirewallFirewall#firewall_name}.

---

##### `firewallPolicyArn`<sup>Required</sup> <a name="firewallPolicyArn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyArn"></a>

```typescript
public readonly firewallPolicyArn: string;
```

- *Type:* string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}

---

##### `availabilityZoneChangeProtection`<sup>Optional</sup> <a name="availabilityZoneChangeProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.availabilityZoneChangeProtection"></a>

```typescript
public readonly availabilityZoneChangeProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#availability_zone_change_protection NetworkfirewallFirewall#availability_zone_change_protection}.

---

##### `availabilityZoneMappings`<sup>Optional</sup> <a name="availabilityZoneMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.availabilityZoneMappings"></a>

```typescript
public readonly availabilityZoneMappings: IResolvable | NetworkfirewallFirewallAvailabilityZoneMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#availability_zone_mappings NetworkfirewallFirewall#availability_zone_mappings}.

---

##### `deleteProtection`<sup>Optional</sup> <a name="deleteProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.deleteProtection"></a>

```typescript
public readonly deleteProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#description NetworkfirewallFirewall#description}.

---

##### `enabledAnalysisTypes`<sup>Optional</sup> <a name="enabledAnalysisTypes" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.enabledAnalysisTypes"></a>

```typescript
public readonly enabledAnalysisTypes: string[];
```

- *Type:* string[]

The types of analysis to enable for the firewall. Can be TLS_SNI, HTTP_HOST, or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#enabled_analysis_types NetworkfirewallFirewall#enabled_analysis_types}

---

##### `firewallPolicyChangeProtection`<sup>Optional</sup> <a name="firewallPolicyChangeProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.firewallPolicyChangeProtection"></a>

```typescript
public readonly firewallPolicyChangeProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}.

---

##### `subnetChangeProtection`<sup>Optional</sup> <a name="subnetChangeProtection" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetChangeProtection"></a>

```typescript
public readonly subnetChangeProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}.

---

##### `subnetMappings`<sup>Optional</sup> <a name="subnetMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.subnetMappings"></a>

```typescript
public readonly subnetMappings: IResolvable | NetworkfirewallFirewallSubnetMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#subnet_mappings NetworkfirewallFirewall#subnet_mappings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NetworkfirewallFirewallTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#transit_gateway_id NetworkfirewallFirewall#transit_gateway_id}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}.

---

### NetworkfirewallFirewallSubnetMappings <a name="NetworkfirewallFirewallSubnetMappings" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

const networkfirewallFirewallSubnetMappings: networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | A IPAddressType. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings.property.subnetId">subnetId</a></code> | <code>string</code> | A SubnetId. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

A IPAddressType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#ip_address_type NetworkfirewallFirewall#ip_address_type}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

A SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#subnet_id NetworkfirewallFirewall#subnet_id}

---

### NetworkfirewallFirewallTags <a name="NetworkfirewallFirewallTags" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

const networkfirewallFirewallTags: networkfirewallFirewall.NetworkfirewallFirewallTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#key NetworkfirewallFirewall#key}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#value NetworkfirewallFirewall#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#key NetworkfirewallFirewall#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_firewall#value NetworkfirewallFirewall#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallFirewallAvailabilityZoneMappingsList <a name="NetworkfirewallFirewallAvailabilityZoneMappingsList" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

new networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.get"></a>

```typescript
public get(index: number): NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallFirewallAvailabilityZoneMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>[]

---


### NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference <a name="NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

new networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallFirewallAvailabilityZoneMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallAvailabilityZoneMappings">NetworkfirewallFirewallAvailabilityZoneMappings</a>

---


### NetworkfirewallFirewallSubnetMappingsList <a name="NetworkfirewallFirewallSubnetMappingsList" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

new networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.get"></a>

```typescript
public get(index: number): NetworkfirewallFirewallSubnetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallFirewallSubnetMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>[]

---


### NetworkfirewallFirewallSubnetMappingsOutputReference <a name="NetworkfirewallFirewallSubnetMappingsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

new networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallFirewallSubnetMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallSubnetMappings">NetworkfirewallFirewallSubnetMappings</a>

---


### NetworkfirewallFirewallTagsList <a name="NetworkfirewallFirewallTagsList" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

new networkfirewallFirewall.NetworkfirewallFirewallTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.get"></a>

```typescript
public get(index: number): NetworkfirewallFirewallTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallFirewallTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>[]

---


### NetworkfirewallFirewallTagsOutputReference <a name="NetworkfirewallFirewallTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer"></a>

```typescript
import { networkfirewallFirewall } from '@cdktn/provider-awscc'

new networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkfirewallFirewallTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallFirewall.NetworkfirewallFirewallTags">NetworkfirewallFirewallTags</a>

---



