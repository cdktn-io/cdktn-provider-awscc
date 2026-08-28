# `vpclatticeServiceNetworkVpcAssociation` Submodule <a name="`vpclatticeServiceNetworkVpcAssociation` Submodule" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkVpcAssociation <a name="VpclatticeServiceNetworkVpcAssociation" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association awscc_vpclattice_service_network_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

new vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation(scope: Construct, id: string, config?: VpclatticeServiceNetworkVpcAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig">VpclatticeServiceNetworkVpcAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig">VpclatticeServiceNetworkVpcAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putDnsOptions">putDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetDnsOptions">resetDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetPrivateDnsEnabled">resetPrivateDnsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetServiceNetworkIdentifier">resetServiceNetworkIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetVpcIdentifier">resetVpcIdentifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDnsOptions` <a name="putDnsOptions" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putDnsOptions"></a>

```typescript
public putDnsOptions(value: VpclatticeServiceNetworkVpcAssociationDnsOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putDnsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions">VpclatticeServiceNetworkVpcAssociationDnsOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTags"></a>

```typescript
public putTags(value: IResolvable | VpclatticeServiceNetworkVpcAssociationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags">VpclatticeServiceNetworkVpcAssociationTags</a>[]

---

##### `resetDnsOptions` <a name="resetDnsOptions" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetDnsOptions"></a>

```typescript
public resetDnsOptions(): void
```

##### `resetPrivateDnsEnabled` <a name="resetPrivateDnsEnabled" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetPrivateDnsEnabled"></a>

```typescript
public resetPrivateDnsEnabled(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetServiceNetworkIdentifier` <a name="resetServiceNetworkIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetServiceNetworkIdentifier"></a>

```typescript
public resetServiceNetworkIdentifier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcIdentifier` <a name="resetVpcIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.resetVpcIdentifier"></a>

```typescript
public resetVpcIdentifier(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeServiceNetworkVpcAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VpclatticeServiceNetworkVpcAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeServiceNetworkVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeServiceNetworkVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference">VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkName">serviceNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkVpcAssociationId">serviceNetworkVpcAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList">VpclatticeServiceNetworkVpcAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.dnsOptionsInput">dnsOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions">VpclatticeServiceNetworkVpcAssociationDnsOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.privateDnsEnabledInput">privateDnsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifierInput">serviceNetworkIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags">VpclatticeServiceNetworkVpcAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifierInput">vpcIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dnsOptions`<sup>Required</sup> <a name="dnsOptions" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.dnsOptions"></a>

```typescript
public readonly dnsOptions: VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference">VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

---

##### `serviceNetworkName`<sup>Required</sup> <a name="serviceNetworkName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkName"></a>

```typescript
public readonly serviceNetworkName: string;
```

- *Type:* string

---

##### `serviceNetworkVpcAssociationId`<sup>Required</sup> <a name="serviceNetworkVpcAssociationId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkVpcAssociationId"></a>

```typescript
public readonly serviceNetworkVpcAssociationId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tags"></a>

```typescript
public readonly tags: VpclatticeServiceNetworkVpcAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList">VpclatticeServiceNetworkVpcAssociationTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `dnsOptionsInput`<sup>Optional</sup> <a name="dnsOptionsInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.dnsOptionsInput"></a>

```typescript
public readonly dnsOptionsInput: IResolvable | VpclatticeServiceNetworkVpcAssociationDnsOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions">VpclatticeServiceNetworkVpcAssociationDnsOptions</a>

---

##### `privateDnsEnabledInput`<sup>Optional</sup> <a name="privateDnsEnabledInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.privateDnsEnabledInput"></a>

```typescript
public readonly privateDnsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `serviceNetworkIdentifierInput`<sup>Optional</sup> <a name="serviceNetworkIdentifierInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifierInput"></a>

```typescript
public readonly serviceNetworkIdentifierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | VpclatticeServiceNetworkVpcAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags">VpclatticeServiceNetworkVpcAssociationTags</a>[]

---

##### `vpcIdentifierInput`<sup>Optional</sup> <a name="vpcIdentifierInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifierInput"></a>

```typescript
public readonly vpcIdentifierInput: string;
```

- *Type:* string

---

##### `privateDnsEnabled`<sup>Required</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.privateDnsEnabled"></a>

```typescript
public readonly privateDnsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifier"></a>

```typescript
public readonly serviceNetworkIdentifier: string;
```

- *Type:* string

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkVpcAssociationConfig <a name="VpclatticeServiceNetworkVpcAssociationConfig" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

const vpclatticeServiceNetworkVpcAssociationConfig: vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions">VpclatticeServiceNetworkVpcAssociationDnsOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#dns_options VpclatticeServiceNetworkVpcAssociation#dns_options}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#private_dns_enabled VpclatticeServiceNetworkVpcAssociation#private_dns_enabled}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#security_group_ids VpclatticeServiceNetworkVpcAssociation#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#service_network_identifier VpclatticeServiceNetworkVpcAssociation#service_network_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags">VpclatticeServiceNetworkVpcAssociationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#tags VpclatticeServiceNetworkVpcAssociation#tags}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#vpc_identifier VpclatticeServiceNetworkVpcAssociation#vpc_identifier}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dnsOptions`<sup>Optional</sup> <a name="dnsOptions" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.dnsOptions"></a>

```typescript
public readonly dnsOptions: VpclatticeServiceNetworkVpcAssociationDnsOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions">VpclatticeServiceNetworkVpcAssociationDnsOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#dns_options VpclatticeServiceNetworkVpcAssociation#dns_options}.

---

##### `privateDnsEnabled`<sup>Optional</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.privateDnsEnabled"></a>

```typescript
public readonly privateDnsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#private_dns_enabled VpclatticeServiceNetworkVpcAssociation#private_dns_enabled}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#security_group_ids VpclatticeServiceNetworkVpcAssociation#security_group_ids}.

---

##### `serviceNetworkIdentifier`<sup>Optional</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.serviceNetworkIdentifier"></a>

```typescript
public readonly serviceNetworkIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#service_network_identifier VpclatticeServiceNetworkVpcAssociation#service_network_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | VpclatticeServiceNetworkVpcAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags">VpclatticeServiceNetworkVpcAssociationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#tags VpclatticeServiceNetworkVpcAssociation#tags}.

---

##### `vpcIdentifier`<sup>Optional</sup> <a name="vpcIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationConfig.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#vpc_identifier VpclatticeServiceNetworkVpcAssociation#vpc_identifier}.

---

### VpclatticeServiceNetworkVpcAssociationDnsOptions <a name="VpclatticeServiceNetworkVpcAssociationDnsOptions" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

const vpclatticeServiceNetworkVpcAssociationDnsOptions: vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions.property.privateDnsPreference">privateDnsPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#private_dns_preference VpclatticeServiceNetworkVpcAssociation#private_dns_preference}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions.property.privateDnsSpecifiedDomains">privateDnsSpecifiedDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#private_dns_specified_domains VpclatticeServiceNetworkVpcAssociation#private_dns_specified_domains}. |

---

##### `privateDnsPreference`<sup>Optional</sup> <a name="privateDnsPreference" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions.property.privateDnsPreference"></a>

```typescript
public readonly privateDnsPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#private_dns_preference VpclatticeServiceNetworkVpcAssociation#private_dns_preference}.

---

##### `privateDnsSpecifiedDomains`<sup>Optional</sup> <a name="privateDnsSpecifiedDomains" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions.property.privateDnsSpecifiedDomains"></a>

```typescript
public readonly privateDnsSpecifiedDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#private_dns_specified_domains VpclatticeServiceNetworkVpcAssociation#private_dns_specified_domains}.

---

### VpclatticeServiceNetworkVpcAssociationTags <a name="VpclatticeServiceNetworkVpcAssociationTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

const vpclatticeServiceNetworkVpcAssociationTags: vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#key VpclatticeServiceNetworkVpcAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#value VpclatticeServiceNetworkVpcAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#key VpclatticeServiceNetworkVpcAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/vpclattice_service_network_vpc_association#value VpclatticeServiceNetworkVpcAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference <a name="VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

new vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resetPrivateDnsPreference">resetPrivateDnsPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resetPrivateDnsSpecifiedDomains">resetPrivateDnsSpecifiedDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateDnsPreference` <a name="resetPrivateDnsPreference" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resetPrivateDnsPreference"></a>

```typescript
public resetPrivateDnsPreference(): void
```

##### `resetPrivateDnsSpecifiedDomains` <a name="resetPrivateDnsSpecifiedDomains" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resetPrivateDnsSpecifiedDomains"></a>

```typescript
public resetPrivateDnsSpecifiedDomains(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsPreferenceInput">privateDnsPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsSpecifiedDomainsInput">privateDnsSpecifiedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsPreference">privateDnsPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">privateDnsSpecifiedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions">VpclatticeServiceNetworkVpcAssociationDnsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateDnsPreferenceInput`<sup>Optional</sup> <a name="privateDnsPreferenceInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsPreferenceInput"></a>

```typescript
public readonly privateDnsPreferenceInput: string;
```

- *Type:* string

---

##### `privateDnsSpecifiedDomainsInput`<sup>Optional</sup> <a name="privateDnsSpecifiedDomainsInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsSpecifiedDomainsInput"></a>

```typescript
public readonly privateDnsSpecifiedDomainsInput: string[];
```

- *Type:* string[]

---

##### `privateDnsPreference`<sup>Required</sup> <a name="privateDnsPreference" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsPreference"></a>

```typescript
public readonly privateDnsPreference: string;
```

- *Type:* string

---

##### `privateDnsSpecifiedDomains`<sup>Required</sup> <a name="privateDnsSpecifiedDomains" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```typescript
public readonly privateDnsSpecifiedDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeServiceNetworkVpcAssociationDnsOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationDnsOptions">VpclatticeServiceNetworkVpcAssociationDnsOptions</a>

---


### VpclatticeServiceNetworkVpcAssociationTagsList <a name="VpclatticeServiceNetworkVpcAssociationTagsList" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

new vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.get"></a>

```typescript
public get(index: number): VpclatticeServiceNetworkVpcAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags">VpclatticeServiceNetworkVpcAssociationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeServiceNetworkVpcAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags">VpclatticeServiceNetworkVpcAssociationTags</a>[]

---


### VpclatticeServiceNetworkVpcAssociationTagsOutputReference <a name="VpclatticeServiceNetworkVpcAssociationTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

new vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags">VpclatticeServiceNetworkVpcAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeServiceNetworkVpcAssociationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkVpcAssociation.VpclatticeServiceNetworkVpcAssociationTags">VpclatticeServiceNetworkVpcAssociationTags</a>

---



