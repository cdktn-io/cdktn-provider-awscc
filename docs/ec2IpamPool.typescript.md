# `ec2IpamPool` Submodule <a name="`ec2IpamPool` Submodule" id="@cdktn/provider-awscc.ec2IpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamPool <a name="Ec2IpamPool" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool awscc_ec2_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

new ec2IpamPool.Ec2IpamPool(scope: Construct, id: string, config: Ec2IpamPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig">Ec2IpamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig">Ec2IpamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags">putAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs">putProvisionedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource">putSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationDefaultNetmaskLength">resetAllocationDefaultNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMaxNetmaskLength">resetAllocationMaxNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMinNetmaskLength">resetAllocationMinNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationResourceTags">resetAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAutoImport">resetAutoImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAwsService">resetAwsService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetProvisionedCidrs">resetProvisionedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPublicIpSource">resetPublicIpSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPubliclyAdvertisable">resetPubliclyAdvertisable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceIpamPoolId">resetSourceIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceResource">resetSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllocationResourceTags` <a name="putAllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags"></a>

```typescript
public putAllocationResourceTags(value: IResolvable | Ec2IpamPoolAllocationResourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>[]

---

##### `putProvisionedCidrs` <a name="putProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs"></a>

```typescript
public putProvisionedCidrs(value: IResolvable | Ec2IpamPoolProvisionedCidrs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>[]

---

##### `putSourceResource` <a name="putSourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource"></a>

```typescript
public putSourceResource(value: Ec2IpamPoolSourceResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2IpamPoolTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>[]

---

##### `resetAllocationDefaultNetmaskLength` <a name="resetAllocationDefaultNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationDefaultNetmaskLength"></a>

```typescript
public resetAllocationDefaultNetmaskLength(): void
```

##### `resetAllocationMaxNetmaskLength` <a name="resetAllocationMaxNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMaxNetmaskLength"></a>

```typescript
public resetAllocationMaxNetmaskLength(): void
```

##### `resetAllocationMinNetmaskLength` <a name="resetAllocationMinNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMinNetmaskLength"></a>

```typescript
public resetAllocationMinNetmaskLength(): void
```

##### `resetAllocationResourceTags` <a name="resetAllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationResourceTags"></a>

```typescript
public resetAllocationResourceTags(): void
```

##### `resetAutoImport` <a name="resetAutoImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAutoImport"></a>

```typescript
public resetAutoImport(): void
```

##### `resetAwsService` <a name="resetAwsService" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAwsService"></a>

```typescript
public resetAwsService(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetProvisionedCidrs` <a name="resetProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetProvisionedCidrs"></a>

```typescript
public resetProvisionedCidrs(): void
```

##### `resetPublicIpSource` <a name="resetPublicIpSource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPublicIpSource"></a>

```typescript
public resetPublicIpSource(): void
```

##### `resetPubliclyAdvertisable` <a name="resetPubliclyAdvertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPubliclyAdvertisable"></a>

```typescript
public resetPubliclyAdvertisable(): void
```

##### `resetSourceIpamPoolId` <a name="resetSourceIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceIpamPoolId"></a>

```typescript
public resetSourceIpamPoolId(): void
```

##### `resetSourceResource` <a name="resetSourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceResource"></a>

```typescript
public resetSourceResource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

ec2IpamPool.Ec2IpamPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

ec2IpamPool.Ec2IpamPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

ec2IpamPool.Ec2IpamPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

ec2IpamPool.Ec2IpamPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2IpamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2IpamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2IpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTags">allocationResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList">Ec2IpamPoolAllocationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamArn">ipamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeArn">ipamScopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeType">ipamScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.poolDepth">poolDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrs">provisionedCidrs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList">Ec2IpamPoolProvisionedCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResource">sourceResource</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference">Ec2IpamPoolSourceResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList">Ec2IpamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLengthInput">allocationDefaultNetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLengthInput">allocationMaxNetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLengthInput">allocationMinNetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTagsInput">allocationResourceTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImportInput">autoImportInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsServiceInput">awsServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeIdInput">ipamScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrsInput">provisionedCidrsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSourceInput">publicIpSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisableInput">publiclyAdvertisableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolIdInput">sourceIpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResourceInput">sourceResourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImport">autoImport</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsService">awsService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSource">publicIpSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allocationResourceTags`<sup>Required</sup> <a name="allocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTags"></a>

```typescript
public readonly allocationResourceTags: Ec2IpamPoolAllocationResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList">Ec2IpamPoolAllocationResourceTagsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamArn`<sup>Required</sup> <a name="ipamArn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamArn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* string

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

---

##### `ipamScopeArn`<sup>Required</sup> <a name="ipamScopeArn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeArn"></a>

```typescript
public readonly ipamScopeArn: string;
```

- *Type:* string

---

##### `ipamScopeType`<sup>Required</sup> <a name="ipamScopeType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeType"></a>

```typescript
public readonly ipamScopeType: string;
```

- *Type:* string

---

##### `poolDepth`<sup>Required</sup> <a name="poolDepth" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.poolDepth"></a>

```typescript
public readonly poolDepth: number;
```

- *Type:* number

---

##### `provisionedCidrs`<sup>Required</sup> <a name="provisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrs"></a>

```typescript
public readonly provisionedCidrs: Ec2IpamPoolProvisionedCidrsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList">Ec2IpamPoolProvisionedCidrsList</a>

---

##### `sourceResource`<sup>Required</sup> <a name="sourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResource"></a>

```typescript
public readonly sourceResource: Ec2IpamPoolSourceResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference">Ec2IpamPoolSourceResourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tags"></a>

```typescript
public readonly tags: Ec2IpamPoolTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList">Ec2IpamPoolTagsList</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `allocationDefaultNetmaskLengthInput`<sup>Optional</sup> <a name="allocationDefaultNetmaskLengthInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLengthInput"></a>

```typescript
public readonly allocationDefaultNetmaskLengthInput: number;
```

- *Type:* number

---

##### `allocationMaxNetmaskLengthInput`<sup>Optional</sup> <a name="allocationMaxNetmaskLengthInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLengthInput"></a>

```typescript
public readonly allocationMaxNetmaskLengthInput: number;
```

- *Type:* number

---

##### `allocationMinNetmaskLengthInput`<sup>Optional</sup> <a name="allocationMinNetmaskLengthInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLengthInput"></a>

```typescript
public readonly allocationMinNetmaskLengthInput: number;
```

- *Type:* number

---

##### `allocationResourceTagsInput`<sup>Optional</sup> <a name="allocationResourceTagsInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTagsInput"></a>

```typescript
public readonly allocationResourceTagsInput: IResolvable | Ec2IpamPoolAllocationResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>[]

---

##### `autoImportInput`<sup>Optional</sup> <a name="autoImportInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImportInput"></a>

```typescript
public readonly autoImportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `awsServiceInput`<sup>Optional</sup> <a name="awsServiceInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsServiceInput"></a>

```typescript
public readonly awsServiceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ipamScopeIdInput`<sup>Optional</sup> <a name="ipamScopeIdInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeIdInput"></a>

```typescript
public readonly ipamScopeIdInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `provisionedCidrsInput`<sup>Optional</sup> <a name="provisionedCidrsInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrsInput"></a>

```typescript
public readonly provisionedCidrsInput: IResolvable | Ec2IpamPoolProvisionedCidrs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>[]

---

##### `publicIpSourceInput`<sup>Optional</sup> <a name="publicIpSourceInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSourceInput"></a>

```typescript
public readonly publicIpSourceInput: string;
```

- *Type:* string

---

##### `publiclyAdvertisableInput`<sup>Optional</sup> <a name="publiclyAdvertisableInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisableInput"></a>

```typescript
public readonly publiclyAdvertisableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceIpamPoolIdInput`<sup>Optional</sup> <a name="sourceIpamPoolIdInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolIdInput"></a>

```typescript
public readonly sourceIpamPoolIdInput: string;
```

- *Type:* string

---

##### `sourceResourceInput`<sup>Optional</sup> <a name="sourceResourceInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResourceInput"></a>

```typescript
public readonly sourceResourceInput: IResolvable | Ec2IpamPoolSourceResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2IpamPoolTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `allocationDefaultNetmaskLength`<sup>Required</sup> <a name="allocationDefaultNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* number

---

##### `allocationMaxNetmaskLength`<sup>Required</sup> <a name="allocationMaxNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLength"></a>

```typescript
public readonly allocationMaxNetmaskLength: number;
```

- *Type:* number

---

##### `allocationMinNetmaskLength`<sup>Required</sup> <a name="allocationMinNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLength"></a>

```typescript
public readonly allocationMinNetmaskLength: number;
```

- *Type:* number

---

##### `autoImport`<sup>Required</sup> <a name="autoImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImport"></a>

```typescript
public readonly autoImport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `awsService`<sup>Required</sup> <a name="awsService" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsService"></a>

```typescript
public readonly awsService: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `publicIpSource`<sup>Required</sup> <a name="publicIpSource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSource"></a>

```typescript
public readonly publicIpSource: string;
```

- *Type:* string

---

##### `publiclyAdvertisable`<sup>Required</sup> <a name="publiclyAdvertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisable"></a>

```typescript
public readonly publiclyAdvertisable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sourceIpamPoolId`<sup>Required</sup> <a name="sourceIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolId"></a>

```typescript
public readonly sourceIpamPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamPoolAllocationResourceTags <a name="Ec2IpamPoolAllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

const ec2IpamPoolAllocationResourceTags: ec2IpamPool.Ec2IpamPoolAllocationResourceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#key Ec2IpamPool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#value Ec2IpamPool#value}

---

### Ec2IpamPoolConfig <a name="Ec2IpamPoolConfig" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

const ec2IpamPoolConfig: ec2IpamPool.Ec2IpamPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.addressFamily">addressFamily</a></code> | <code>string</code> | The address family of the address space in this pool. Either IPv4 or IPv6. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | The Id of the scope this pool is a part of. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>number</code> | The default netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>number</code> | The maximum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>number</code> | The minimum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationResourceTags">allocationResourceTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>[]</code> | When specified, an allocation will not be allowed unless a resource has a matching set of tags. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.autoImport">autoImport</a></code> | <code>boolean \| cdktn.IResolvable</code> | Determines what to do if IPAM discovers resources that haven't been assigned an allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.awsService">awsService</a></code> | <code>string</code> | Limits which service in Amazon Web Services that the pool can be used in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.locale">locale</a></code> | <code>string</code> | The region of this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisionedCidrs">provisionedCidrs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>[]</code> | A list of cidrs representing the address space available for allocation in this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publicIpSource">publicIpSource</a></code> | <code>string</code> | The IP address source for pools in the public scope. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Determines whether or not address space from this pool is publicly advertised. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>string</code> | The Id of this pool's source. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceResource">sourceResource</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | The resource associated with this pool's space. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

The address family of the address space in this pool. Either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#address_family Ec2IpamPool#address_family}

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

The Id of the scope this pool is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#ipam_scope_id Ec2IpamPool#ipam_scope_id}

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="allocationDefaultNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationDefaultNetmaskLength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* number

The default netmask length for allocations made from this pool.

This value is used when the netmask length of an allocation isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#allocation_default_netmask_length Ec2IpamPool#allocation_default_netmask_length}

---

##### `allocationMaxNetmaskLength`<sup>Optional</sup> <a name="allocationMaxNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMaxNetmaskLength"></a>

```typescript
public readonly allocationMaxNetmaskLength: number;
```

- *Type:* number

The maximum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#allocation_max_netmask_length Ec2IpamPool#allocation_max_netmask_length}

---

##### `allocationMinNetmaskLength`<sup>Optional</sup> <a name="allocationMinNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMinNetmaskLength"></a>

```typescript
public readonly allocationMinNetmaskLength: number;
```

- *Type:* number

The minimum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#allocation_min_netmask_length Ec2IpamPool#allocation_min_netmask_length}

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="allocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationResourceTags"></a>

```typescript
public readonly allocationResourceTags: IResolvable | Ec2IpamPoolAllocationResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>[]

When specified, an allocation will not be allowed unless a resource has a matching set of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#allocation_resource_tags Ec2IpamPool#allocation_resource_tags}

---

##### `autoImport`<sup>Optional</sup> <a name="autoImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.autoImport"></a>

```typescript
public readonly autoImport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Determines what to do if IPAM discovers resources that haven't been assigned an allocation.

If set to true, an allocation will be made automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#auto_import Ec2IpamPool#auto_import}

---

##### `awsService`<sup>Optional</sup> <a name="awsService" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.awsService"></a>

```typescript
public readonly awsService: string;
```

- *Type:* string

Limits which service in Amazon Web Services that the pool can be used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#aws_service Ec2IpamPool#aws_service}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

The region of this pool.

If not set, this will default to "None" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#locale Ec2IpamPool#locale}

---

##### `provisionedCidrs`<sup>Optional</sup> <a name="provisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisionedCidrs"></a>

```typescript
public readonly provisionedCidrs: IResolvable | Ec2IpamPoolProvisionedCidrs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>[]

A list of cidrs representing the address space available for allocation in this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#provisioned_cidrs Ec2IpamPool#provisioned_cidrs}

---

##### `publicIpSource`<sup>Optional</sup> <a name="publicIpSource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publicIpSource"></a>

```typescript
public readonly publicIpSource: string;
```

- *Type:* string

The IP address source for pools in the public scope.

Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#public_ip_source Ec2IpamPool#public_ip_source}

---

##### `publiclyAdvertisable`<sup>Optional</sup> <a name="publiclyAdvertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publiclyAdvertisable"></a>

```typescript
public readonly publiclyAdvertisable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Determines whether or not address space from this pool is publicly advertised.

Must be set if and only if the pool is IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#publicly_advertisable Ec2IpamPool#publicly_advertisable}

---

##### `sourceIpamPoolId`<sup>Optional</sup> <a name="sourceIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceIpamPoolId"></a>

```typescript
public readonly sourceIpamPoolId: string;
```

- *Type:* string

The Id of this pool's source.

If set, all space provisioned in this pool must be free space provisioned in the parent pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#source_ipam_pool_id Ec2IpamPool#source_ipam_pool_id}

---

##### `sourceResource`<sup>Optional</sup> <a name="sourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceResource"></a>

```typescript
public readonly sourceResource: Ec2IpamPoolSourceResource;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

The resource associated with this pool's space.

Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#source_resource Ec2IpamPool#source_resource}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2IpamPoolTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#tags Ec2IpamPool#tags}

---

### Ec2IpamPoolProvisionedCidrs <a name="Ec2IpamPoolProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

const ec2IpamPoolProvisionedCidrs: ec2IpamPool.Ec2IpamPoolProvisionedCidrs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.property.cidr">cidr</a></code> | <code>string</code> | Represents a single IPv4 or IPv6 CIDR. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Represents a single IPv4 or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#cidr Ec2IpamPool#cidr}

---

### Ec2IpamPoolSourceResource <a name="Ec2IpamPoolSourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

const ec2IpamPoolSourceResource: ec2IpamPool.Ec2IpamPoolSourceResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#resource_id Ec2IpamPool#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#resource_owner Ec2IpamPool#resource_owner}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#resource_region Ec2IpamPool#resource_region}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#resource_type Ec2IpamPool#resource_type}. |

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#resource_id Ec2IpamPool#resource_id}.

---

##### `resourceOwner`<sup>Optional</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#resource_owner Ec2IpamPool#resource_owner}.

---

##### `resourceRegion`<sup>Optional</sup> <a name="resourceRegion" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#resource_region Ec2IpamPool#resource_region}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#resource_type Ec2IpamPool#resource_type}.

---

### Ec2IpamPoolTags <a name="Ec2IpamPoolTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

const ec2IpamPoolTags: ec2IpamPool.Ec2IpamPoolTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#key Ec2IpamPool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_pool#value Ec2IpamPool#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamPoolAllocationResourceTagsList <a name="Ec2IpamPoolAllocationResourceTagsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

new ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get"></a>

```typescript
public get(index: number): Ec2IpamPoolAllocationResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPoolAllocationResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>[]

---


### Ec2IpamPoolAllocationResourceTagsOutputReference <a name="Ec2IpamPoolAllocationResourceTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

new ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPoolAllocationResourceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags">Ec2IpamPoolAllocationResourceTags</a>

---


### Ec2IpamPoolProvisionedCidrsList <a name="Ec2IpamPoolProvisionedCidrsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

new ec2IpamPool.Ec2IpamPoolProvisionedCidrsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get"></a>

```typescript
public get(index: number): Ec2IpamPoolProvisionedCidrsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPoolProvisionedCidrs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>[]

---


### Ec2IpamPoolProvisionedCidrsOutputReference <a name="Ec2IpamPoolProvisionedCidrsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

new ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resetCidr">resetCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPoolProvisionedCidrs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs">Ec2IpamPoolProvisionedCidrs</a>

---


### Ec2IpamPoolSourceResourceOutputReference <a name="Ec2IpamPoolSourceResourceOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

new ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceOwner">resetResourceOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceRegion">resetResourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetResourceOwner` <a name="resetResourceOwner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceOwner"></a>

```typescript
public resetResourceOwner(): void
```

##### `resetResourceRegion` <a name="resetResourceRegion" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceRegion"></a>

```typescript
public resetResourceRegion(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwnerInput">resourceOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegionInput">resourceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceOwnerInput`<sup>Optional</sup> <a name="resourceOwnerInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwnerInput"></a>

```typescript
public readonly resourceOwnerInput: string;
```

- *Type:* string

---

##### `resourceRegionInput`<sup>Optional</sup> <a name="resourceRegionInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegionInput"></a>

```typescript
public readonly resourceRegionInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPoolSourceResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

---


### Ec2IpamPoolTagsList <a name="Ec2IpamPoolTagsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

new ec2IpamPool.Ec2IpamPoolTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get"></a>

```typescript
public get(index: number): Ec2IpamPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPoolTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>[]

---


### Ec2IpamPoolTagsOutputReference <a name="Ec2IpamPoolTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer"></a>

```typescript
import { ec2IpamPool } from '@cdktn/provider-awscc'

new ec2IpamPool.Ec2IpamPoolTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPoolTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags">Ec2IpamPoolTags</a>

---



