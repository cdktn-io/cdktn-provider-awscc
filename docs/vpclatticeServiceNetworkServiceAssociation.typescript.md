# `vpclatticeServiceNetworkServiceAssociation` Submodule <a name="`vpclatticeServiceNetworkServiceAssociation` Submodule" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkServiceAssociation <a name="VpclatticeServiceNetworkServiceAssociation" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association awscc_vpclattice_service_network_service_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

new vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation(scope: Construct, id: string, config?: VpclatticeServiceNetworkServiceAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig">VpclatticeServiceNetworkServiceAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig">VpclatticeServiceNetworkServiceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putDnsEntry">putDnsEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetDnsEntry">resetDnsEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetServiceIdentifier">resetServiceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetServiceNetworkIdentifier">resetServiceNetworkIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDnsEntry` <a name="putDnsEntry" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putDnsEntry"></a>

```typescript
public putDnsEntry(value: VpclatticeServiceNetworkServiceAssociationDnsEntry): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putDnsEntry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTags"></a>

```typescript
public putTags(value: IResolvable | VpclatticeServiceNetworkServiceAssociationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]

---

##### `resetDnsEntry` <a name="resetDnsEntry" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetDnsEntry"></a>

```typescript
public resetDnsEntry(): void
```

##### `resetServiceIdentifier` <a name="resetServiceIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetServiceIdentifier"></a>

```typescript
public resetServiceIdentifier(): void
```

##### `resetServiceNetworkIdentifier` <a name="resetServiceNetworkIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetServiceNetworkIdentifier"></a>

```typescript
public resetServiceNetworkIdentifier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeServiceNetworkServiceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VpclatticeServiceNetworkServiceAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeServiceNetworkServiceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeServiceNetworkServiceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkServiceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntry">dnsEntry</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference">VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceArn">serviceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkName">serviceNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkServiceAssociationId">serviceNetworkServiceAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList">VpclatticeServiceNetworkServiceAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntryInput">dnsEntryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifierInput">serviceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifierInput">serviceNetworkIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dnsEntry`<sup>Required</sup> <a name="dnsEntry" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference">VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

---

##### `serviceNetworkName`<sup>Required</sup> <a name="serviceNetworkName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkName"></a>

```typescript
public readonly serviceNetworkName: string;
```

- *Type:* string

---

##### `serviceNetworkServiceAssociationId`<sup>Required</sup> <a name="serviceNetworkServiceAssociationId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkServiceAssociationId"></a>

```typescript
public readonly serviceNetworkServiceAssociationId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tags"></a>

```typescript
public readonly tags: VpclatticeServiceNetworkServiceAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList">VpclatticeServiceNetworkServiceAssociationTagsList</a>

---

##### `dnsEntryInput`<sup>Optional</sup> <a name="dnsEntryInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntryInput"></a>

```typescript
public readonly dnsEntryInput: IResolvable | VpclatticeServiceNetworkServiceAssociationDnsEntry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a>

---

##### `serviceIdentifierInput`<sup>Optional</sup> <a name="serviceIdentifierInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifierInput"></a>

```typescript
public readonly serviceIdentifierInput: string;
```

- *Type:* string

---

##### `serviceNetworkIdentifierInput`<sup>Optional</sup> <a name="serviceNetworkIdentifierInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifierInput"></a>

```typescript
public readonly serviceNetworkIdentifierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | VpclatticeServiceNetworkServiceAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifier"></a>

```typescript
public readonly serviceNetworkIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkServiceAssociationConfig <a name="VpclatticeServiceNetworkServiceAssociationConfig" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

const vpclatticeServiceNetworkServiceAssociationConfig: vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dnsEntry">dnsEntry</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#dns_entry VpclatticeServiceNetworkServiceAssociation#dns_entry}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dnsEntry`<sup>Optional</sup> <a name="dnsEntry" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: VpclatticeServiceNetworkServiceAssociationDnsEntry;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#dns_entry VpclatticeServiceNetworkServiceAssociation#dns_entry}.

---

##### `serviceIdentifier`<sup>Optional</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}.

---

##### `serviceNetworkIdentifier`<sup>Optional</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceNetworkIdentifier"></a>

```typescript
public readonly serviceNetworkIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | VpclatticeServiceNetworkServiceAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}.

---

### VpclatticeServiceNetworkServiceAssociationDnsEntry <a name="VpclatticeServiceNetworkServiceAssociationDnsEntry" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

const vpclatticeServiceNetworkServiceAssociationDnsEntry: vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry = { ... }
```


### VpclatticeServiceNetworkServiceAssociationTags <a name="VpclatticeServiceNetworkServiceAssociationTags" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

const vpclatticeServiceNetworkServiceAssociationTags: vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#key VpclatticeServiceNetworkServiceAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#value VpclatticeServiceNetworkServiceAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#key VpclatticeServiceNetworkServiceAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_service_network_service_association#value VpclatticeServiceNetworkServiceAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference <a name="VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

new vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeServiceNetworkServiceAssociationDnsEntry;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a>

---


### VpclatticeServiceNetworkServiceAssociationTagsList <a name="VpclatticeServiceNetworkServiceAssociationTagsList" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

new vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.get"></a>

```typescript
public get(index: number): VpclatticeServiceNetworkServiceAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeServiceNetworkServiceAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>[]

---


### VpclatticeServiceNetworkServiceAssociationTagsOutputReference <a name="VpclatticeServiceNetworkServiceAssociationTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer"></a>

```typescript
import { vpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

new vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeServiceNetworkServiceAssociationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTags">VpclatticeServiceNetworkServiceAssociationTags</a>

---



