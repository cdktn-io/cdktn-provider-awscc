# `licensemanagerLicenseAssetGroup` Submodule <a name="`licensemanagerLicenseAssetGroup` Submodule" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseAssetGroup <a name="LicensemanagerLicenseAssetGroup" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group awscc_licensemanager_license_asset_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup(scope: Construct, id: string, config: LicensemanagerLicenseAssetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig">LicensemanagerLicenseAssetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig">LicensemanagerLicenseAssetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putLicenseAssetGroupConfigurations">putLicenseAssetGroupConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLicenseAssetGroupConfigurations` <a name="putLicenseAssetGroupConfigurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putLicenseAssetGroupConfigurations"></a>

```typescript
public putLicenseAssetGroupConfigurations(value: IResolvable | LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putLicenseAssetGroupConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>[]

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putProperties"></a>

```typescript
public putProperties(value: IResolvable | LicensemanagerLicenseAssetGroupProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | LicensemanagerLicenseAssetGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isConstruct"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformElement"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformResource"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LicensemanagerLicenseAssetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicensemanagerLicenseAssetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicensemanagerLicenseAssetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicenseAssetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn">licenseAssetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations">licenseAssetGroupConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList">LicensemanagerLicenseAssetGroupPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList">LicensemanagerLicenseAssetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNsInput">associatedLicenseAssetRulesetArNsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurationsInput">licenseAssetGroupConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.propertiesInput">propertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs">associatedLicenseAssetRulesetArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseAssetGroupArn`<sup>Required</sup> <a name="licenseAssetGroupArn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupArn"></a>

```typescript
public readonly licenseAssetGroupArn: string;
```

- *Type:* string

---

##### `licenseAssetGroupConfigurations`<sup>Required</sup> <a name="licenseAssetGroupConfigurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurations"></a>

```typescript
public readonly licenseAssetGroupConfigurations: LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.properties"></a>

```typescript
public readonly properties: LicensemanagerLicenseAssetGroupPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList">LicensemanagerLicenseAssetGroupPropertiesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tags"></a>

```typescript
public readonly tags: LicensemanagerLicenseAssetGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList">LicensemanagerLicenseAssetGroupTagsList</a>

---

##### `associatedLicenseAssetRulesetArNsInput`<sup>Optional</sup> <a name="associatedLicenseAssetRulesetArNsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNsInput"></a>

```typescript
public readonly associatedLicenseAssetRulesetArNsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `licenseAssetGroupConfigurationsInput`<sup>Optional</sup> <a name="licenseAssetGroupConfigurationsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.licenseAssetGroupConfigurationsInput"></a>

```typescript
public readonly licenseAssetGroupConfigurationsInput: IResolvable | LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | LicensemanagerLicenseAssetGroupProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LicensemanagerLicenseAssetGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>[]

---

##### `associatedLicenseAssetRulesetArNs`<sup>Required</sup> <a name="associatedLicenseAssetRulesetArNs" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.associatedLicenseAssetRulesetArNs"></a>

```typescript
public readonly associatedLicenseAssetRulesetArNs: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseAssetGroupConfig <a name="LicensemanagerLicenseAssetGroupConfig" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetGroupConfig: licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.associatedLicenseAssetRulesetArNs">associatedLicenseAssetRulesetArNs</a></code> | <code>string[]</code> | ARNs of associated license asset rulesets. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.licenseAssetGroupConfigurations">licenseAssetGroupConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>[]</code> | License asset group configurations. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.name">name</a></code> | <code>string</code> | License asset group name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.description">description</a></code> | <code>string</code> | License asset group description. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.properties">properties</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>[]</code> | License asset group properties. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>[]</code> | Tags to add to the license asset group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associatedLicenseAssetRulesetArNs`<sup>Required</sup> <a name="associatedLicenseAssetRulesetArNs" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.associatedLicenseAssetRulesetArNs"></a>

```typescript
public readonly associatedLicenseAssetRulesetArNs: string[];
```

- *Type:* string[]

ARNs of associated license asset rulesets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#associated_license_asset_ruleset_ar_ns LicensemanagerLicenseAssetGroup#associated_license_asset_ruleset_ar_ns}

---

##### `licenseAssetGroupConfigurations`<sup>Required</sup> <a name="licenseAssetGroupConfigurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.licenseAssetGroupConfigurations"></a>

```typescript
public readonly licenseAssetGroupConfigurations: IResolvable | LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>[]

License asset group configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#license_asset_group_configurations LicensemanagerLicenseAssetGroup#license_asset_group_configurations}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

License asset group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#name LicensemanagerLicenseAssetGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

License asset group description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#description LicensemanagerLicenseAssetGroup#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.properties"></a>

```typescript
public readonly properties: IResolvable | LicensemanagerLicenseAssetGroupProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>[]

License asset group properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#properties LicensemanagerLicenseAssetGroup#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LicensemanagerLicenseAssetGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>[]

Tags to add to the license asset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#tags LicensemanagerLicenseAssetGroup#tags}

---

### LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations <a name="LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations: licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.property.usageDimension">usageDimension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#usage_dimension LicensemanagerLicenseAssetGroup#usage_dimension}. |

---

##### `usageDimension`<sup>Optional</sup> <a name="usageDimension" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations.property.usageDimension"></a>

```typescript
public readonly usageDimension: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#usage_dimension LicensemanagerLicenseAssetGroup#usage_dimension}.

---

### LicensemanagerLicenseAssetGroupProperties <a name="LicensemanagerLicenseAssetGroupProperties" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetGroupProperties: licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}.

---

### LicensemanagerLicenseAssetGroupTags <a name="LicensemanagerLicenseAssetGroupTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetGroupTags: licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#key LicensemanagerLicenseAssetGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/licensemanager_license_asset_group#value LicensemanagerLicenseAssetGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList <a name="LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>[]

---


### LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference <a name="LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resetUsageDimension">resetUsageDimension</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUsageDimension` <a name="resetUsageDimension" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.resetUsageDimension"></a>

```typescript
public resetUsageDimension(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimensionInput">usageDimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension">usageDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usageDimensionInput`<sup>Optional</sup> <a name="usageDimensionInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimensionInput"></a>

```typescript
public readonly usageDimensionInput: string;
```

- *Type:* string

---

##### `usageDimension`<sup>Required</sup> <a name="usageDimension" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.usageDimension"></a>

```typescript
public readonly usageDimension: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations">LicensemanagerLicenseAssetGroupLicenseAssetGroupConfigurations</a>

---


### LicensemanagerLicenseAssetGroupPropertiesList <a name="LicensemanagerLicenseAssetGroupPropertiesList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetGroupPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetGroupProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>[]

---


### LicensemanagerLicenseAssetGroupPropertiesOutputReference <a name="LicensemanagerLicenseAssetGroupPropertiesOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetGroupProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupProperties">LicensemanagerLicenseAssetGroupProperties</a>

---


### LicensemanagerLicenseAssetGroupTagsList <a name="LicensemanagerLicenseAssetGroupTagsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>[]

---


### LicensemanagerLicenseAssetGroupTagsOutputReference <a name="LicensemanagerLicenseAssetGroupTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetGroup } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetGroup.LicensemanagerLicenseAssetGroupTags">LicensemanagerLicenseAssetGroupTags</a>

---



