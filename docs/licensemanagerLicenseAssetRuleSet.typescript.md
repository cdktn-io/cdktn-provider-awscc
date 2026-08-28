# `licensemanagerLicenseAssetRuleSet` Submodule <a name="`licensemanagerLicenseAssetRuleSet` Submodule" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseAssetRuleSet <a name="LicensemanagerLicenseAssetRuleSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set awscc_licensemanager_license_asset_rule_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet(scope: Construct, id: string, config: LicensemanagerLicenseAssetRuleSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig">LicensemanagerLicenseAssetRuleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig">LicensemanagerLicenseAssetRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putRules"></a>

```typescript
public putRules(value: IResolvable | LicensemanagerLicenseAssetRuleSetRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putTags"></a>

```typescript
public putTags(value: IResolvable | LicensemanagerLicenseAssetRuleSetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerLicenseAssetRuleSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isConstruct"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformElement"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformResource"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LicensemanagerLicenseAssetRuleSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicensemanagerLicenseAssetRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicensemanagerLicenseAssetRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicenseAssetRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.licenseAssetRulesetArn">licenseAssetRulesetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList">LicensemanagerLicenseAssetRuleSetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList">LicensemanagerLicenseAssetRuleSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseAssetRulesetArn`<sup>Required</sup> <a name="licenseAssetRulesetArn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.licenseAssetRulesetArn"></a>

```typescript
public readonly licenseAssetRulesetArn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rules"></a>

```typescript
public readonly rules: LicensemanagerLicenseAssetRuleSetRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList">LicensemanagerLicenseAssetRuleSetRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tags"></a>

```typescript
public readonly tags: LicensemanagerLicenseAssetRuleSetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList">LicensemanagerLicenseAssetRuleSetTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | LicensemanagerLicenseAssetRuleSetRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LicensemanagerLicenseAssetRuleSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseAssetRuleSetConfig <a name="LicensemanagerLicenseAssetRuleSetConfig" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetConfig: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.name">name</a></code> | <code>string</code> | License asset ruleset name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>[]</code> | License asset rules. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.description">description</a></code> | <code>string</code> | License asset ruleset description. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>[]</code> | Tags to add to the license asset ruleset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

License asset ruleset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#name LicensemanagerLicenseAssetRuleSet#name}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | LicensemanagerLicenseAssetRuleSetRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>[]

License asset rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#rules LicensemanagerLicenseAssetRuleSet#rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

License asset ruleset description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#description LicensemanagerLicenseAssetRuleSet#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LicensemanagerLicenseAssetRuleSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>[]

Tags to add to the license asset ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#tags LicensemanagerLicenseAssetRuleSet#tags}

---

### LicensemanagerLicenseAssetRuleSetRules <a name="LicensemanagerLicenseAssetRuleSetRules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRules: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules.property.ruleStatement">ruleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a></code> | Rule statement. Specify exactly one of InstanceRuleStatement, LicenseRuleStatement, or LicenseConfigurationRuleStatement. |

---

##### `ruleStatement`<sup>Required</sup> <a name="ruleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules.property.ruleStatement"></a>

```typescript
public readonly ruleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a>

Rule statement. Specify exactly one of InstanceRuleStatement, LicenseRuleStatement, or LicenseConfigurationRuleStatement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#rule_statement LicensemanagerLicenseAssetRuleSet#rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.instanceRuleStatement">instanceRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a></code> | Instance rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseConfigurationRuleStatement">licenseConfigurationRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a></code> | License configuration rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseRuleStatement">licenseRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a></code> | License rule statement. |

---

##### `instanceRuleStatement`<sup>Optional</sup> <a name="instanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.instanceRuleStatement"></a>

```typescript
public readonly instanceRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

Instance rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#instance_rule_statement LicensemanagerLicenseAssetRuleSet#instance_rule_statement}

---

##### `licenseConfigurationRuleStatement`<sup>Optional</sup> <a name="licenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseConfigurationRuleStatement"></a>

```typescript
public readonly licenseConfigurationRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

License configuration rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#license_configuration_rule_statement LicensemanagerLicenseAssetRuleSet#license_configuration_rule_statement}

---

##### `licenseRuleStatement`<sup>Optional</sup> <a name="licenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseRuleStatement"></a>

```typescript
public readonly licenseRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

License rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#license_rule_statement LicensemanagerLicenseAssetRuleSet#license_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.andRuleStatement">andRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a></code> | AND rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.matchingRuleStatement">matchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a></code> | Matching rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.orRuleStatement">orRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a></code> | OR rule statement. |

---

##### `andRuleStatement`<sup>Optional</sup> <a name="andRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.andRuleStatement"></a>

```typescript
public readonly andRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

##### `matchingRuleStatement`<sup>Optional</sup> <a name="matchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.matchingRuleStatement"></a>

```typescript
public readonly matchingRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

##### `orRuleStatement`<sup>Optional</sup> <a name="orRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.orRuleStatement"></a>

```typescript
public readonly orRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matchingRuleStatements`<sup>Optional</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `keyToMatch`<sup>Optional</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `valueToMatch`<sup>Optional</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.constraint">constraint</a></code> | <code>string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `keyToMatch`<sup>Optional</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `valueToMatch`<sup>Optional</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matchingRuleStatements`<sup>Optional</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `keyToMatch`<sup>Optional</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `valueToMatch`<sup>Optional</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.andRuleStatement">andRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a></code> | AND rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.matchingRuleStatement">matchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a></code> | Matching rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.orRuleStatement">orRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a></code> | OR rule statement. |

---

##### `andRuleStatement`<sup>Optional</sup> <a name="andRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.andRuleStatement"></a>

```typescript
public readonly andRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

##### `matchingRuleStatement`<sup>Optional</sup> <a name="matchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.matchingRuleStatement"></a>

```typescript
public readonly matchingRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

##### `orRuleStatement`<sup>Optional</sup> <a name="orRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.orRuleStatement"></a>

```typescript
public readonly orRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matchingRuleStatements`<sup>Optional</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `keyToMatch`<sup>Optional</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `valueToMatch`<sup>Optional</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.constraint">constraint</a></code> | <code>string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `keyToMatch`<sup>Optional</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `valueToMatch`<sup>Optional</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matchingRuleStatements`<sup>Optional</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `keyToMatch`<sup>Optional</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `valueToMatch`<sup>Optional</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.andRuleStatement">andRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a></code> | AND rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.matchingRuleStatement">matchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a></code> | Matching rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.orRuleStatement">orRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a></code> | OR rule statement. |

---

##### `andRuleStatement`<sup>Optional</sup> <a name="andRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.andRuleStatement"></a>

```typescript
public readonly andRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

##### `matchingRuleStatement`<sup>Optional</sup> <a name="matchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.matchingRuleStatement"></a>

```typescript
public readonly matchingRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

##### `orRuleStatement`<sup>Optional</sup> <a name="orRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.orRuleStatement"></a>

```typescript
public readonly orRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matchingRuleStatements`<sup>Optional</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `keyToMatch`<sup>Optional</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `valueToMatch`<sup>Optional</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.constraint">constraint</a></code> | <code>string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `keyToMatch`<sup>Optional</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `valueToMatch`<sup>Optional</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `matchingRuleStatements`<sup>Optional</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint">constraint</a></code> | <code>string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | Values to match. |

---

##### `constraint`<sup>Optional</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `keyToMatch`<sup>Optional</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `valueToMatch`<sup>Optional</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetTags <a name="LicensemanagerLicenseAssetRuleSetTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

const licensemanagerLicenseAssetRuleSetTags: licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key LicensemanagerLicenseAssetRuleSet#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value LicensemanagerLicenseAssetRuleSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#key LicensemanagerLicenseAssetRuleSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license_asset_rule_set#value LicensemanagerLicenseAssetRuleSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseAssetRuleSetRulesList <a name="LicensemanagerLicenseAssetRuleSetRulesList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetRuleSetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>[]

---


### LicensemanagerLicenseAssetRuleSetRulesOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement">putRuleStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRuleStatement` <a name="putRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement"></a>

```typescript
public putRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatement">ruleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatementInput">ruleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ruleStatement`<sup>Required</sup> <a name="ruleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatement"></a>

```typescript
public readonly ruleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference</a>

---

##### `ruleStatementInput`<sup>Optional</sup> <a name="ruleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatementInput"></a>

```typescript
public readonly ruleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules">LicensemanagerLicenseAssetRuleSetRules</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">resetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">resetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">resetValueToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstraint` <a name="resetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```typescript
public resetConstraint(): void
```

##### `resetKeyToMatch` <a name="resetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```typescript
public resetKeyToMatch(): void
```

##### `resetValueToMatch` <a name="resetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```typescript
public resetValueToMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">keyToMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">valueToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `keyToMatchInput`<sup>Optional</sup> <a name="keyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```typescript
public readonly keyToMatchInput: string;
```

- *Type:* string

---

##### `valueToMatchInput`<sup>Optional</sup> <a name="valueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```typescript
public readonly valueToMatchInput: string[];
```

- *Type:* string[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `keyToMatch`<sup>Required</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

---

##### `valueToMatch`<sup>Required</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements">putMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements">resetMatchingRuleStatements</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingRuleStatements` <a name="putMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements"></a>

```typescript
public putMatchingRuleStatements(value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

---

##### `resetMatchingRuleStatements` <a name="resetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```typescript
public resetMatchingRuleStatements(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput">matchingRuleStatementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingRuleStatements`<sup>Required</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `matchingRuleStatementsInput`<sup>Optional</sup> <a name="matchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```typescript
public readonly matchingRuleStatementsInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetConstraint">resetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch">resetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch">resetValueToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstraint` <a name="resetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetConstraint"></a>

```typescript
public resetConstraint(): void
```

##### `resetKeyToMatch` <a name="resetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch"></a>

```typescript
public resetKeyToMatch(): void
```

##### `resetValueToMatch` <a name="resetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch"></a>

```typescript
public resetValueToMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput">keyToMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput">valueToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `keyToMatchInput`<sup>Optional</sup> <a name="keyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput"></a>

```typescript
public readonly keyToMatchInput: string;
```

- *Type:* string

---

##### `valueToMatchInput`<sup>Optional</sup> <a name="valueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput"></a>

```typescript
public readonly valueToMatchInput: string[];
```

- *Type:* string[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `keyToMatch`<sup>Required</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

---

##### `valueToMatch`<sup>Required</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">resetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">resetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">resetValueToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstraint` <a name="resetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```typescript
public resetConstraint(): void
```

##### `resetKeyToMatch` <a name="resetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```typescript
public resetKeyToMatch(): void
```

##### `resetValueToMatch` <a name="resetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```typescript
public resetValueToMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">keyToMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">valueToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `keyToMatchInput`<sup>Optional</sup> <a name="keyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```typescript
public readonly keyToMatchInput: string;
```

- *Type:* string

---

##### `valueToMatchInput`<sup>Optional</sup> <a name="valueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```typescript
public readonly valueToMatchInput: string[];
```

- *Type:* string[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `keyToMatch`<sup>Required</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

---

##### `valueToMatch`<sup>Required</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements">putMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements">resetMatchingRuleStatements</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingRuleStatements` <a name="putMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements"></a>

```typescript
public putMatchingRuleStatements(value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

---

##### `resetMatchingRuleStatements` <a name="resetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```typescript
public resetMatchingRuleStatements(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput">matchingRuleStatementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingRuleStatements`<sup>Required</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `matchingRuleStatementsInput`<sup>Optional</sup> <a name="matchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```typescript
public readonly matchingRuleStatementsInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putAndRuleStatement">putAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement">putMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putOrRuleStatement">putOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetAndRuleStatement">resetAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetMatchingRuleStatement">resetMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetOrRuleStatement">resetOrRuleStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndRuleStatement` <a name="putAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putAndRuleStatement"></a>

```typescript
public putAndRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putAndRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

---

##### `putMatchingRuleStatement` <a name="putMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement"></a>

```typescript
public putMatchingRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

---

##### `putOrRuleStatement` <a name="putOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putOrRuleStatement"></a>

```typescript
public putOrRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putOrRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

---

##### `resetAndRuleStatement` <a name="resetAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetAndRuleStatement"></a>

```typescript
public resetAndRuleStatement(): void
```

##### `resetMatchingRuleStatement` <a name="resetMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetMatchingRuleStatement"></a>

```typescript
public resetMatchingRuleStatement(): void
```

##### `resetOrRuleStatement` <a name="resetOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetOrRuleStatement"></a>

```typescript
public resetOrRuleStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatement">andRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatement">matchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatement">orRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatementInput">andRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatementInput">matchingRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatementInput">orRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `andRuleStatement`<sup>Required</sup> <a name="andRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatement"></a>

```typescript
public readonly andRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference</a>

---

##### `matchingRuleStatement`<sup>Required</sup> <a name="matchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatement"></a>

```typescript
public readonly matchingRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `orRuleStatement`<sup>Required</sup> <a name="orRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatement"></a>

```typescript
public readonly orRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference</a>

---

##### `andRuleStatementInput`<sup>Optional</sup> <a name="andRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatementInput"></a>

```typescript
public readonly andRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

---

##### `matchingRuleStatementInput`<sup>Optional</sup> <a name="matchingRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatementInput"></a>

```typescript
public readonly matchingRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

---

##### `orRuleStatementInput`<sup>Optional</sup> <a name="orRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatementInput"></a>

```typescript
public readonly orRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">resetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">resetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">resetValueToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstraint` <a name="resetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```typescript
public resetConstraint(): void
```

##### `resetKeyToMatch` <a name="resetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```typescript
public resetKeyToMatch(): void
```

##### `resetValueToMatch` <a name="resetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```typescript
public resetValueToMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">keyToMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">valueToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `keyToMatchInput`<sup>Optional</sup> <a name="keyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```typescript
public readonly keyToMatchInput: string;
```

- *Type:* string

---

##### `valueToMatchInput`<sup>Optional</sup> <a name="valueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```typescript
public readonly valueToMatchInput: string[];
```

- *Type:* string[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `keyToMatch`<sup>Required</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

---

##### `valueToMatch`<sup>Required</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements">putMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements">resetMatchingRuleStatements</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingRuleStatements` <a name="putMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements"></a>

```typescript
public putMatchingRuleStatements(value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

---

##### `resetMatchingRuleStatements` <a name="resetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```typescript
public resetMatchingRuleStatements(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput">matchingRuleStatementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingRuleStatements`<sup>Required</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `matchingRuleStatementsInput`<sup>Optional</sup> <a name="matchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```typescript
public readonly matchingRuleStatementsInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetConstraint">resetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch">resetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch">resetValueToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstraint` <a name="resetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetConstraint"></a>

```typescript
public resetConstraint(): void
```

##### `resetKeyToMatch` <a name="resetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch"></a>

```typescript
public resetKeyToMatch(): void
```

##### `resetValueToMatch` <a name="resetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch"></a>

```typescript
public resetValueToMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput">keyToMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput">valueToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `keyToMatchInput`<sup>Optional</sup> <a name="keyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput"></a>

```typescript
public readonly keyToMatchInput: string;
```

- *Type:* string

---

##### `valueToMatchInput`<sup>Optional</sup> <a name="valueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput"></a>

```typescript
public readonly valueToMatchInput: string[];
```

- *Type:* string[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `keyToMatch`<sup>Required</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

---

##### `valueToMatch`<sup>Required</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">resetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">resetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">resetValueToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstraint` <a name="resetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```typescript
public resetConstraint(): void
```

##### `resetKeyToMatch` <a name="resetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```typescript
public resetKeyToMatch(): void
```

##### `resetValueToMatch` <a name="resetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```typescript
public resetValueToMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">keyToMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">valueToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `keyToMatchInput`<sup>Optional</sup> <a name="keyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```typescript
public readonly keyToMatchInput: string;
```

- *Type:* string

---

##### `valueToMatchInput`<sup>Optional</sup> <a name="valueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```typescript
public readonly valueToMatchInput: string[];
```

- *Type:* string[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `keyToMatch`<sup>Required</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

---

##### `valueToMatch`<sup>Required</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements">putMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements">resetMatchingRuleStatements</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingRuleStatements` <a name="putMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements"></a>

```typescript
public putMatchingRuleStatements(value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

---

##### `resetMatchingRuleStatements` <a name="resetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```typescript
public resetMatchingRuleStatements(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput">matchingRuleStatementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingRuleStatements`<sup>Required</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `matchingRuleStatementsInput`<sup>Optional</sup> <a name="matchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```typescript
public readonly matchingRuleStatementsInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putAndRuleStatement">putAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement">putMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putOrRuleStatement">putOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetAndRuleStatement">resetAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetMatchingRuleStatement">resetMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetOrRuleStatement">resetOrRuleStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndRuleStatement` <a name="putAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putAndRuleStatement"></a>

```typescript
public putAndRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putAndRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

---

##### `putMatchingRuleStatement` <a name="putMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement"></a>

```typescript
public putMatchingRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

---

##### `putOrRuleStatement` <a name="putOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putOrRuleStatement"></a>

```typescript
public putOrRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putOrRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

---

##### `resetAndRuleStatement` <a name="resetAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetAndRuleStatement"></a>

```typescript
public resetAndRuleStatement(): void
```

##### `resetMatchingRuleStatement` <a name="resetMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetMatchingRuleStatement"></a>

```typescript
public resetMatchingRuleStatement(): void
```

##### `resetOrRuleStatement` <a name="resetOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetOrRuleStatement"></a>

```typescript
public resetOrRuleStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatement">andRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatement">matchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatement">orRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatementInput">andRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatementInput">matchingRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatementInput">orRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `andRuleStatement`<sup>Required</sup> <a name="andRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatement"></a>

```typescript
public readonly andRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference</a>

---

##### `matchingRuleStatement`<sup>Required</sup> <a name="matchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatement"></a>

```typescript
public readonly matchingRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `orRuleStatement`<sup>Required</sup> <a name="orRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatement"></a>

```typescript
public readonly orRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference</a>

---

##### `andRuleStatementInput`<sup>Optional</sup> <a name="andRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatementInput"></a>

```typescript
public readonly andRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

---

##### `matchingRuleStatementInput`<sup>Optional</sup> <a name="matchingRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatementInput"></a>

```typescript
public readonly matchingRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

---

##### `orRuleStatementInput`<sup>Optional</sup> <a name="orRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatementInput"></a>

```typescript
public readonly orRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">resetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">resetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">resetValueToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstraint` <a name="resetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```typescript
public resetConstraint(): void
```

##### `resetKeyToMatch` <a name="resetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```typescript
public resetKeyToMatch(): void
```

##### `resetValueToMatch` <a name="resetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```typescript
public resetValueToMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">keyToMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">valueToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `keyToMatchInput`<sup>Optional</sup> <a name="keyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```typescript
public readonly keyToMatchInput: string;
```

- *Type:* string

---

##### `valueToMatchInput`<sup>Optional</sup> <a name="valueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```typescript
public readonly valueToMatchInput: string[];
```

- *Type:* string[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `keyToMatch`<sup>Required</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

---

##### `valueToMatch`<sup>Required</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements">putMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements">resetMatchingRuleStatements</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingRuleStatements` <a name="putMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements"></a>

```typescript
public putMatchingRuleStatements(value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

---

##### `resetMatchingRuleStatements` <a name="resetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```typescript
public resetMatchingRuleStatements(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput">matchingRuleStatementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingRuleStatements`<sup>Required</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `matchingRuleStatementsInput`<sup>Optional</sup> <a name="matchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```typescript
public readonly matchingRuleStatementsInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetConstraint">resetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch">resetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch">resetValueToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstraint` <a name="resetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetConstraint"></a>

```typescript
public resetConstraint(): void
```

##### `resetKeyToMatch` <a name="resetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch"></a>

```typescript
public resetKeyToMatch(): void
```

##### `resetValueToMatch` <a name="resetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch"></a>

```typescript
public resetValueToMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput">keyToMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput">valueToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `keyToMatchInput`<sup>Optional</sup> <a name="keyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput"></a>

```typescript
public readonly keyToMatchInput: string;
```

- *Type:* string

---

##### `valueToMatchInput`<sup>Optional</sup> <a name="valueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput"></a>

```typescript
public readonly valueToMatchInput: string[];
```

- *Type:* string[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `keyToMatch`<sup>Required</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

---

##### `valueToMatch`<sup>Required</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">resetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">resetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">resetValueToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstraint` <a name="resetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```typescript
public resetConstraint(): void
```

##### `resetKeyToMatch` <a name="resetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```typescript
public resetKeyToMatch(): void
```

##### `resetValueToMatch` <a name="resetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```typescript
public resetValueToMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">constraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">keyToMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">valueToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">constraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">keyToMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">valueToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constraintInput`<sup>Optional</sup> <a name="constraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```typescript
public readonly constraintInput: string;
```

- *Type:* string

---

##### `keyToMatchInput`<sup>Optional</sup> <a name="keyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```typescript
public readonly keyToMatchInput: string;
```

- *Type:* string

---

##### `valueToMatchInput`<sup>Optional</sup> <a name="valueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```typescript
public readonly valueToMatchInput: string[];
```

- *Type:* string[]

---

##### `constraint`<sup>Required</sup> <a name="constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```typescript
public readonly constraint: string;
```

- *Type:* string

---

##### `keyToMatch`<sup>Required</sup> <a name="keyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```typescript
public readonly keyToMatch: string;
```

- *Type:* string

---

##### `valueToMatch`<sup>Required</sup> <a name="valueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```typescript
public readonly valueToMatch: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements">putMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements">resetMatchingRuleStatements</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingRuleStatements` <a name="putMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements"></a>

```typescript
public putMatchingRuleStatements(value: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

---

##### `resetMatchingRuleStatements` <a name="resetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```typescript
public resetMatchingRuleStatements(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">matchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput">matchingRuleStatementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingRuleStatements`<sup>Required</sup> <a name="matchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```typescript
public readonly matchingRuleStatements: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `matchingRuleStatementsInput`<sup>Optional</sup> <a name="matchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```typescript
public readonly matchingRuleStatementsInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putAndRuleStatement">putAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement">putMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putOrRuleStatement">putOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetAndRuleStatement">resetAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetMatchingRuleStatement">resetMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetOrRuleStatement">resetOrRuleStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAndRuleStatement` <a name="putAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putAndRuleStatement"></a>

```typescript
public putAndRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putAndRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

---

##### `putMatchingRuleStatement` <a name="putMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement"></a>

```typescript
public putMatchingRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

---

##### `putOrRuleStatement` <a name="putOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putOrRuleStatement"></a>

```typescript
public putOrRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putOrRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

---

##### `resetAndRuleStatement` <a name="resetAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetAndRuleStatement"></a>

```typescript
public resetAndRuleStatement(): void
```

##### `resetMatchingRuleStatement` <a name="resetMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetMatchingRuleStatement"></a>

```typescript
public resetMatchingRuleStatement(): void
```

##### `resetOrRuleStatement` <a name="resetOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetOrRuleStatement"></a>

```typescript
public resetOrRuleStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatement">andRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatement">matchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatement">orRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatementInput">andRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatementInput">matchingRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatementInput">orRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `andRuleStatement`<sup>Required</sup> <a name="andRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatement"></a>

```typescript
public readonly andRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference</a>

---

##### `matchingRuleStatement`<sup>Required</sup> <a name="matchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatement"></a>

```typescript
public readonly matchingRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `orRuleStatement`<sup>Required</sup> <a name="orRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatement"></a>

```typescript
public readonly orRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference</a>

---

##### `andRuleStatementInput`<sup>Optional</sup> <a name="andRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatementInput"></a>

```typescript
public readonly andRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

---

##### `matchingRuleStatementInput`<sup>Optional</sup> <a name="matchingRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatementInput"></a>

```typescript
public readonly matchingRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

---

##### `orRuleStatementInput`<sup>Optional</sup> <a name="orRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatementInput"></a>

```typescript
public readonly orRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement">putInstanceRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement">putLicenseConfigurationRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement">putLicenseRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetInstanceRuleStatement">resetInstanceRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseConfigurationRuleStatement">resetLicenseConfigurationRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseRuleStatement">resetLicenseRuleStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceRuleStatement` <a name="putInstanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement"></a>

```typescript
public putInstanceRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

---

##### `putLicenseConfigurationRuleStatement` <a name="putLicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement"></a>

```typescript
public putLicenseConfigurationRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

---

##### `putLicenseRuleStatement` <a name="putLicenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement"></a>

```typescript
public putLicenseRuleStatement(value: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

---

##### `resetInstanceRuleStatement` <a name="resetInstanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetInstanceRuleStatement"></a>

```typescript
public resetInstanceRuleStatement(): void
```

##### `resetLicenseConfigurationRuleStatement` <a name="resetLicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseConfigurationRuleStatement"></a>

```typescript
public resetLicenseConfigurationRuleStatement(): void
```

##### `resetLicenseRuleStatement` <a name="resetLicenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseRuleStatement"></a>

```typescript
public resetLicenseRuleStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatement">instanceRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatement">licenseConfigurationRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatement">licenseRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatementInput">instanceRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatementInput">licenseConfigurationRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatementInput">licenseRuleStatementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceRuleStatement`<sup>Required</sup> <a name="instanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatement"></a>

```typescript
public readonly instanceRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference</a>

---

##### `licenseConfigurationRuleStatement`<sup>Required</sup> <a name="licenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatement"></a>

```typescript
public readonly licenseConfigurationRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference</a>

---

##### `licenseRuleStatement`<sup>Required</sup> <a name="licenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatement"></a>

```typescript
public readonly licenseRuleStatement: LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference</a>

---

##### `instanceRuleStatementInput`<sup>Optional</sup> <a name="instanceRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatementInput"></a>

```typescript
public readonly instanceRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

---

##### `licenseConfigurationRuleStatementInput`<sup>Optional</sup> <a name="licenseConfigurationRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatementInput"></a>

```typescript
public readonly licenseConfigurationRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

---

##### `licenseRuleStatementInput`<sup>Optional</sup> <a name="licenseRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatementInput"></a>

```typescript
public readonly licenseRuleStatementInput: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetRulesRuleStatement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a>

---


### LicensemanagerLicenseAssetRuleSetTagsList <a name="LicensemanagerLicenseAssetRuleSetTagsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseAssetRuleSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>[]

---


### LicensemanagerLicenseAssetRuleSetTagsOutputReference <a name="LicensemanagerLicenseAssetRuleSetTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicenseAssetRuleSet } from '@cdktn/provider-awscc'

new licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseAssetRuleSetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags">LicensemanagerLicenseAssetRuleSetTags</a>

---



