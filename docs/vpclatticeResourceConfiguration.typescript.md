# `vpclatticeResourceConfiguration` Submodule <a name="`vpclatticeResourceConfiguration` Submodule" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeResourceConfiguration <a name="VpclatticeResourceConfiguration" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration awscc_vpclattice_resource_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

new vpclatticeResourceConfiguration.VpclatticeResourceConfiguration(scope: Construct, id: string, config: VpclatticeResourceConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig">VpclatticeResourceConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig">VpclatticeResourceConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition">putResourceConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetAllowAssociationToSharableServiceNetwork">resetAllowAssociationToSharableServiceNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetCustomDomainName">resetCustomDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetDomainVerificationId">resetDomainVerificationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetGroupDomain">resetGroupDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationAuthType">resetResourceConfigurationAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationDefinition">resetResourceConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationGroupId">resetResourceConfigurationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceGatewayId">resetResourceGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceConfigurationDefinition` <a name="putResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition"></a>

```typescript
public putResourceConfigurationDefinition(value: VpclatticeResourceConfigurationResourceConfigurationDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putResourceConfigurationDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | VpclatticeResourceConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]

---

##### `resetAllowAssociationToSharableServiceNetwork` <a name="resetAllowAssociationToSharableServiceNetwork" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetAllowAssociationToSharableServiceNetwork"></a>

```typescript
public resetAllowAssociationToSharableServiceNetwork(): void
```

##### `resetCustomDomainName` <a name="resetCustomDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetCustomDomainName"></a>

```typescript
public resetCustomDomainName(): void
```

##### `resetDomainVerificationId` <a name="resetDomainVerificationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetDomainVerificationId"></a>

```typescript
public resetDomainVerificationId(): void
```

##### `resetGroupDomain` <a name="resetGroupDomain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetGroupDomain"></a>

```typescript
public resetGroupDomain(): void
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetPortRanges"></a>

```typescript
public resetPortRanges(): void
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetProtocolType"></a>

```typescript
public resetProtocolType(): void
```

##### `resetResourceConfigurationAuthType` <a name="resetResourceConfigurationAuthType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationAuthType"></a>

```typescript
public resetResourceConfigurationAuthType(): void
```

##### `resetResourceConfigurationDefinition` <a name="resetResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationDefinition"></a>

```typescript
public resetResourceConfigurationDefinition(): void
```

##### `resetResourceConfigurationGroupId` <a name="resetResourceConfigurationGroupId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceConfigurationGroupId"></a>

```typescript
public resetResourceConfigurationGroupId(): void
```

##### `resetResourceGatewayId` <a name="resetResourceGatewayId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetResourceGatewayId"></a>

```typescript
public resetResourceGatewayId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VpclatticeResourceConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeResourceConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeResourceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeResourceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinition">resourceConfigurationDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList">VpclatticeResourceConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetworkInput">allowAssociationToSharableServiceNetworkInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainNameInput">customDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationIdInput">domainVerificationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomainInput">groupDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRangesInput">portRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthTypeInput">resourceConfigurationAuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinitionInput">resourceConfigurationDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupIdInput">resourceConfigurationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationTypeInput">resourceConfigurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayIdInput">resourceGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetwork">allowAssociationToSharableServiceNetwork</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainName">customDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationId">domainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomain">groupDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRanges">portRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthType">resourceConfigurationAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupId">resourceConfigurationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationType">resourceConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayId">resourceGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceConfigurationDefinition`<sup>Required</sup> <a name="resourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinition"></a>

```typescript
public readonly resourceConfigurationDefinition: VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference</a>

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tags"></a>

```typescript
public readonly tags: VpclatticeResourceConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList">VpclatticeResourceConfigurationTagsList</a>

---

##### `allowAssociationToSharableServiceNetworkInput`<sup>Optional</sup> <a name="allowAssociationToSharableServiceNetworkInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetworkInput"></a>

```typescript
public readonly allowAssociationToSharableServiceNetworkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customDomainNameInput`<sup>Optional</sup> <a name="customDomainNameInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainNameInput"></a>

```typescript
public readonly customDomainNameInput: string;
```

- *Type:* string

---

##### `domainVerificationIdInput`<sup>Optional</sup> <a name="domainVerificationIdInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationIdInput"></a>

```typescript
public readonly domainVerificationIdInput: string;
```

- *Type:* string

---

##### `groupDomainInput`<sup>Optional</sup> <a name="groupDomainInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomainInput"></a>

```typescript
public readonly groupDomainInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRangesInput"></a>

```typescript
public readonly portRangesInput: string[];
```

- *Type:* string[]

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `resourceConfigurationAuthTypeInput`<sup>Optional</sup> <a name="resourceConfigurationAuthTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthTypeInput"></a>

```typescript
public readonly resourceConfigurationAuthTypeInput: string;
```

- *Type:* string

---

##### `resourceConfigurationDefinitionInput`<sup>Optional</sup> <a name="resourceConfigurationDefinitionInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationDefinitionInput"></a>

```typescript
public readonly resourceConfigurationDefinitionInput: IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

---

##### `resourceConfigurationGroupIdInput`<sup>Optional</sup> <a name="resourceConfigurationGroupIdInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupIdInput"></a>

```typescript
public readonly resourceConfigurationGroupIdInput: string;
```

- *Type:* string

---

##### `resourceConfigurationTypeInput`<sup>Optional</sup> <a name="resourceConfigurationTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationTypeInput"></a>

```typescript
public readonly resourceConfigurationTypeInput: string;
```

- *Type:* string

---

##### `resourceGatewayIdInput`<sup>Optional</sup> <a name="resourceGatewayIdInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayIdInput"></a>

```typescript
public readonly resourceGatewayIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | VpclatticeResourceConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]

---

##### `allowAssociationToSharableServiceNetwork`<sup>Required</sup> <a name="allowAssociationToSharableServiceNetwork" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.allowAssociationToSharableServiceNetwork"></a>

```typescript
public readonly allowAssociationToSharableServiceNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `customDomainName`<sup>Required</sup> <a name="customDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.customDomainName"></a>

```typescript
public readonly customDomainName: string;
```

- *Type:* string

---

##### `domainVerificationId`<sup>Required</sup> <a name="domainVerificationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.domainVerificationId"></a>

```typescript
public readonly domainVerificationId: string;
```

- *Type:* string

---

##### `groupDomain`<sup>Required</sup> <a name="groupDomain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.groupDomain"></a>

```typescript
public readonly groupDomain: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `resourceConfigurationAuthType`<sup>Required</sup> <a name="resourceConfigurationAuthType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationAuthType"></a>

```typescript
public readonly resourceConfigurationAuthType: string;
```

- *Type:* string

---

##### `resourceConfigurationGroupId`<sup>Required</sup> <a name="resourceConfigurationGroupId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationGroupId"></a>

```typescript
public readonly resourceConfigurationGroupId: string;
```

- *Type:* string

---

##### `resourceConfigurationType`<sup>Required</sup> <a name="resourceConfigurationType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceConfigurationType"></a>

```typescript
public readonly resourceConfigurationType: string;
```

- *Type:* string

---

##### `resourceGatewayId`<sup>Required</sup> <a name="resourceGatewayId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.resourceGatewayId"></a>

```typescript
public readonly resourceGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeResourceConfigurationConfig <a name="VpclatticeResourceConfigurationConfig" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.Initializer"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

const vpclatticeResourceConfigurationConfig: vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationType">resourceConfigurationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type VpclatticeResourceConfiguration#resource_configuration_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.allowAssociationToSharableServiceNetwork">allowAssociationToSharableServiceNetwork</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network VpclatticeResourceConfiguration#allow_association_to_sharable_service_network}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.customDomainName">customDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.domainVerificationId">domainVerificationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.groupDomain">groupDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#group_domain VpclatticeResourceConfiguration#group_domain}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.portRanges">portRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.protocolType">protocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#protocol_type VpclatticeResourceConfiguration#protocol_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationAuthType">resourceConfigurationAuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type VpclatticeResourceConfiguration#resource_configuration_auth_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationDefinition">resourceConfigurationDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationGroupId">resourceConfigurationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceGatewayId">resourceGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id VpclatticeResourceConfiguration#resource_gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}.

---

##### `resourceConfigurationType`<sup>Required</sup> <a name="resourceConfigurationType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationType"></a>

```typescript
public readonly resourceConfigurationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_type VpclatticeResourceConfiguration#resource_configuration_type}.

---

##### `allowAssociationToSharableServiceNetwork`<sup>Optional</sup> <a name="allowAssociationToSharableServiceNetwork" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.allowAssociationToSharableServiceNetwork"></a>

```typescript
public readonly allowAssociationToSharableServiceNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#allow_association_to_sharable_service_network VpclatticeResourceConfiguration#allow_association_to_sharable_service_network}.

---

##### `customDomainName`<sup>Optional</sup> <a name="customDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.customDomainName"></a>

```typescript
public readonly customDomainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#custom_domain_name VpclatticeResourceConfiguration#custom_domain_name}.

---

##### `domainVerificationId`<sup>Optional</sup> <a name="domainVerificationId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.domainVerificationId"></a>

```typescript
public readonly domainVerificationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#domain_verification_id VpclatticeResourceConfiguration#domain_verification_id}.

---

##### `groupDomain`<sup>Optional</sup> <a name="groupDomain" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.groupDomain"></a>

```typescript
public readonly groupDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#group_domain VpclatticeResourceConfiguration#group_domain}.

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#protocol_type VpclatticeResourceConfiguration#protocol_type}.

---

##### `resourceConfigurationAuthType`<sup>Optional</sup> <a name="resourceConfigurationAuthType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationAuthType"></a>

```typescript
public readonly resourceConfigurationAuthType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_auth_type VpclatticeResourceConfiguration#resource_configuration_auth_type}.

---

##### `resourceConfigurationDefinition`<sup>Optional</sup> <a name="resourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationDefinition"></a>

```typescript
public readonly resourceConfigurationDefinition: VpclatticeResourceConfigurationResourceConfigurationDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}.

---

##### `resourceConfigurationGroupId`<sup>Optional</sup> <a name="resourceConfigurationGroupId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceConfigurationGroupId"></a>

```typescript
public readonly resourceConfigurationGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}.

---

##### `resourceGatewayId`<sup>Optional</sup> <a name="resourceGatewayId" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.resourceGatewayId"></a>

```typescript
public readonly resourceGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#resource_gateway_id VpclatticeResourceConfiguration#resource_gateway_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | VpclatticeResourceConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}.

---

### VpclatticeResourceConfigurationResourceConfigurationDefinition <a name="VpclatticeResourceConfigurationResourceConfigurationDefinition" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.Initializer"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

const vpclatticeResourceConfigurationResourceConfigurationDefinition: vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.arnResource">arnResource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.dnsResource">dnsResource</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.ipResource">ipResource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}. |

---

##### `arnResource`<sup>Optional</sup> <a name="arnResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.arnResource"></a>

```typescript
public readonly arnResource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}.

---

##### `dnsResource`<sup>Optional</sup> <a name="dnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.dnsResource"></a>

```typescript
public readonly dnsResource: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}.

---

##### `ipResource`<sup>Optional</sup> <a name="ipResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition.property.ipResource"></a>

```typescript
public readonly ipResource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}.

---

### VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.Initializer"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

const vpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource: vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}. |

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}.

---

### VpclatticeResourceConfigurationTags <a name="VpclatticeResourceConfigurationTags" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.Initializer"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

const vpclatticeResourceConfigurationTags: vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#key VpclatticeResourceConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#value VpclatticeResourceConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#key VpclatticeResourceConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/vpclattice_resource_configuration#value VpclatticeResourceConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

new vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

---


### VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference <a name="VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

new vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource">putDnsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetArnResource">resetArnResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetDnsResource">resetDnsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetIpResource">resetIpResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsResource` <a name="putDnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource"></a>

```typescript
public putDnsResource(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.putDnsResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

---

##### `resetArnResource` <a name="resetArnResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetArnResource"></a>

```typescript
public resetArnResource(): void
```

##### `resetDnsResource` <a name="resetDnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetDnsResource"></a>

```typescript
public resetDnsResource(): void
```

##### `resetIpResource` <a name="resetIpResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.resetIpResource"></a>

```typescript
public resetIpResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResource">dnsResource</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResourceInput">arnResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResourceInput">dnsResourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResourceInput">ipResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResource">arnResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResource">ipResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsResource`<sup>Required</sup> <a name="dnsResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResource"></a>

```typescript
public readonly dnsResource: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference</a>

---

##### `arnResourceInput`<sup>Optional</sup> <a name="arnResourceInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResourceInput"></a>

```typescript
public readonly arnResourceInput: string;
```

- *Type:* string

---

##### `dnsResourceInput`<sup>Optional</sup> <a name="dnsResourceInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.dnsResourceInput"></a>

```typescript
public readonly dnsResourceInput: IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource">VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource</a>

---

##### `ipResourceInput`<sup>Optional</sup> <a name="ipResourceInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResourceInput"></a>

```typescript
public readonly ipResourceInput: string;
```

- *Type:* string

---

##### `arnResource`<sup>Required</sup> <a name="arnResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.arnResource"></a>

```typescript
public readonly arnResource: string;
```

- *Type:* string

---

##### `ipResource`<sup>Required</sup> <a name="ipResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.ipResource"></a>

```typescript
public readonly ipResource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationResourceConfigurationDefinition">VpclatticeResourceConfigurationResourceConfigurationDefinition</a>

---


### VpclatticeResourceConfigurationTagsList <a name="VpclatticeResourceConfigurationTagsList" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

new vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get"></a>

```typescript
public get(index: number): VpclatticeResourceConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeResourceConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>[]

---


### VpclatticeResourceConfigurationTagsOutputReference <a name="VpclatticeResourceConfigurationTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { vpclatticeResourceConfiguration } from '@cdktn/provider-awscc'

new vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeResourceConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeResourceConfiguration.VpclatticeResourceConfigurationTags">VpclatticeResourceConfigurationTags</a>

---



