# `licensemanagerLicense` Submodule <a name="`licensemanagerLicense` Submodule" id="@cdktn/provider-awscc.licensemanagerLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicense <a name="LicensemanagerLicense" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license awscc_licensemanager_license}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicense(scope: Construct, id: string, config: LicensemanagerLicenseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig">LicensemanagerLicenseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig">LicensemanagerLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration">putConsumptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements">putEntitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer">putIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata">putLicenseMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity">putValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetLicenseMetadata">resetLicenseMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConsumptionConfiguration` <a name="putConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration"></a>

```typescript
public putConsumptionConfiguration(value: LicensemanagerLicenseConsumptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---

##### `putEntitlements` <a name="putEntitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements"></a>

```typescript
public putEntitlements(value: IResolvable | LicensemanagerLicenseEntitlements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]

---

##### `putIssuer` <a name="putIssuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer"></a>

```typescript
public putIssuer(value: LicensemanagerLicenseIssuer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---

##### `putLicenseMetadata` <a name="putLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata"></a>

```typescript
public putLicenseMetadata(value: IResolvable | LicensemanagerLicenseLicenseMetadata[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags"></a>

```typescript
public putTags(value: IResolvable | LicensemanagerLicenseTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]

---

##### `putValidity` <a name="putValidity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity"></a>

```typescript
public putValidity(value: LicensemanagerLicenseValidity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---

##### `resetLicenseMetadata` <a name="resetLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetLicenseMetadata"></a>

```typescript
public resetLicenseMetadata(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerLicense resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

licensemanagerLicense.LicensemanagerLicense.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

licensemanagerLicense.LicensemanagerLicense.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

licensemanagerLicense.LicensemanagerLicense.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

licensemanagerLicense.LicensemanagerLicense.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LicensemanagerLicense resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicensemanagerLicense to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicensemanagerLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfiguration">consumptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlements">entitlements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList">LicensemanagerLicenseEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuer">issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference">LicensemanagerLicenseIssuerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseArn">licenseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadata">licenseMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList">LicensemanagerLicenseLicenseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList">LicensemanagerLicenseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference">LicensemanagerLicenseValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiaryInput">beneficiaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfigurationInput">consumptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlementsInput">entitlementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegionInput">homeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuerInput">issuerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadataInput">licenseMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseNameInput">licenseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productNameInput">productNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSkuInput">productSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validityInput">validityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiary">beneficiary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegion">homeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseName">licenseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productName">productName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSku">productSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `consumptionConfiguration`<sup>Required</sup> <a name="consumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfiguration"></a>

```typescript
public readonly consumptionConfiguration: LicensemanagerLicenseConsumptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationOutputReference</a>

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlements"></a>

```typescript
public readonly entitlements: LicensemanagerLicenseEntitlementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList">LicensemanagerLicenseEntitlementsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuer"></a>

```typescript
public readonly issuer: LicensemanagerLicenseIssuerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference">LicensemanagerLicenseIssuerOutputReference</a>

---

##### `licenseArn`<sup>Required</sup> <a name="licenseArn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseArn"></a>

```typescript
public readonly licenseArn: string;
```

- *Type:* string

---

##### `licenseMetadata`<sup>Required</sup> <a name="licenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadata"></a>

```typescript
public readonly licenseMetadata: LicensemanagerLicenseLicenseMetadataList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList">LicensemanagerLicenseLicenseMetadataList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tags"></a>

```typescript
public readonly tags: LicensemanagerLicenseTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList">LicensemanagerLicenseTagsList</a>

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validity"></a>

```typescript
public readonly validity: LicensemanagerLicenseValidityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference">LicensemanagerLicenseValidityOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `beneficiaryInput`<sup>Optional</sup> <a name="beneficiaryInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiaryInput"></a>

```typescript
public readonly beneficiaryInput: string;
```

- *Type:* string

---

##### `consumptionConfigurationInput`<sup>Optional</sup> <a name="consumptionConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfigurationInput"></a>

```typescript
public readonly consumptionConfigurationInput: IResolvable | LicensemanagerLicenseConsumptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---

##### `entitlementsInput`<sup>Optional</sup> <a name="entitlementsInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlementsInput"></a>

```typescript
public readonly entitlementsInput: IResolvable | LicensemanagerLicenseEntitlements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]

---

##### `homeRegionInput`<sup>Optional</sup> <a name="homeRegionInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegionInput"></a>

```typescript
public readonly homeRegionInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuerInput"></a>

```typescript
public readonly issuerInput: IResolvable | LicensemanagerLicenseIssuer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---

##### `licenseMetadataInput`<sup>Optional</sup> <a name="licenseMetadataInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadataInput"></a>

```typescript
public readonly licenseMetadataInput: IResolvable | LicensemanagerLicenseLicenseMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]

---

##### `licenseNameInput`<sup>Optional</sup> <a name="licenseNameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseNameInput"></a>

```typescript
public readonly licenseNameInput: string;
```

- *Type:* string

---

##### `productNameInput`<sup>Optional</sup> <a name="productNameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productNameInput"></a>

```typescript
public readonly productNameInput: string;
```

- *Type:* string

---

##### `productSkuInput`<sup>Optional</sup> <a name="productSkuInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSkuInput"></a>

```typescript
public readonly productSkuInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LicensemanagerLicenseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]

---

##### `validityInput`<sup>Optional</sup> <a name="validityInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validityInput"></a>

```typescript
public readonly validityInput: IResolvable | LicensemanagerLicenseValidity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---

##### `beneficiary`<sup>Required</sup> <a name="beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiary"></a>

```typescript
public readonly beneficiary: string;
```

- *Type:* string

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegion"></a>

```typescript
public readonly homeRegion: string;
```

- *Type:* string

---

##### `licenseName`<sup>Required</sup> <a name="licenseName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseName"></a>

```typescript
public readonly licenseName: string;
```

- *Type:* string

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

---

##### `productSku`<sup>Required</sup> <a name="productSku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSku"></a>

```typescript
public readonly productSku: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfig <a name="LicensemanagerLicenseConfig" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

const licensemanagerLicenseConfig: licensemanagerLicense.LicensemanagerLicenseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.beneficiary">beneficiary</a></code> | <code>string</code> | Beneficiary of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.consumptionConfiguration">consumptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.entitlements">entitlements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.homeRegion">homeRegion</a></code> | <code>string</code> | Home region for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.issuer">issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseName">licenseName</a></code> | <code>string</code> | Name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productName">productName</a></code> | <code>string</code> | Product name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productSku">productSku</a></code> | <code>string</code> | ProductSKU of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.validity">validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseMetadata">licenseMetadata</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]</code> | A list of tags to attach. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `beneficiary`<sup>Required</sup> <a name="beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.beneficiary"></a>

```typescript
public readonly beneficiary: string;
```

- *Type:* string

Beneficiary of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#beneficiary LicensemanagerLicense#beneficiary}

---

##### `consumptionConfiguration`<sup>Required</sup> <a name="consumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.consumptionConfiguration"></a>

```typescript
public readonly consumptionConfiguration: LicensemanagerLicenseConsumptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}.

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.entitlements"></a>

```typescript
public readonly entitlements: IResolvable | LicensemanagerLicenseEntitlements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}.

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.homeRegion"></a>

```typescript
public readonly homeRegion: string;
```

- *Type:* string

Home region for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#home_region LicensemanagerLicense#home_region}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.issuer"></a>

```typescript
public readonly issuer: LicensemanagerLicenseIssuer;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}.

---

##### `licenseName`<sup>Required</sup> <a name="licenseName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseName"></a>

```typescript
public readonly licenseName: string;
```

- *Type:* string

Name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#license_name LicensemanagerLicense#license_name}

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

Product name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#product_name LicensemanagerLicense#product_name}

---

##### `productSku`<sup>Required</sup> <a name="productSku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productSku"></a>

```typescript
public readonly productSku: string;
```

- *Type:* string

ProductSKU of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#product_sku LicensemanagerLicense#product_sku}

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.validity"></a>

```typescript
public readonly validity: LicensemanagerLicenseValidity;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}.

---

##### `licenseMetadata`<sup>Optional</sup> <a name="licenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseMetadata"></a>

```typescript
public readonly licenseMetadata: IResolvable | LicensemanagerLicenseLicenseMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LicensemanagerLicenseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]

A list of tags to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#tags LicensemanagerLicense#tags}

---

### LicensemanagerLicenseConsumptionConfiguration <a name="LicensemanagerLicenseConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

const licensemanagerLicenseConsumptionConfiguration: licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.borrowConfiguration">borrowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.provisionalConfiguration">provisionalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.renewType">renewType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}. |

---

##### `borrowConfiguration`<sup>Optional</sup> <a name="borrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.borrowConfiguration"></a>

```typescript
public readonly borrowConfiguration: LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}.

---

##### `provisionalConfiguration`<sup>Optional</sup> <a name="provisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.provisionalConfiguration"></a>

```typescript
public readonly provisionalConfiguration: LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}.

---

##### `renewType`<sup>Optional</sup> <a name="renewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.renewType"></a>

```typescript
public readonly renewType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}.

---

### LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration <a name="LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

const licensemanagerLicenseConsumptionConfigurationBorrowConfiguration: licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.allowEarlyCheckIn">allowEarlyCheckIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}. |

---

##### `allowEarlyCheckIn`<sup>Optional</sup> <a name="allowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.allowEarlyCheckIn"></a>

```typescript
public readonly allowEarlyCheckIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}.

---

##### `maxTimeToLiveInMinutes`<sup>Optional</sup> <a name="maxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.maxTimeToLiveInMinutes"></a>

```typescript
public readonly maxTimeToLiveInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

### LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration <a name="LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

const licensemanagerLicenseConsumptionConfigurationProvisionalConfiguration: licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}. |

---

##### `maxTimeToLiveInMinutes`<sup>Optional</sup> <a name="maxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.property.maxTimeToLiveInMinutes"></a>

```typescript
public readonly maxTimeToLiveInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

### LicensemanagerLicenseEntitlements <a name="LicensemanagerLicenseEntitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

const licensemanagerLicenseEntitlements: licensemanagerLicense.LicensemanagerLicenseEntitlements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#unit LicensemanagerLicense#unit}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.allowCheckIn">allowCheckIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#allow_check_in LicensemanagerLicense#allow_check_in}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.maxCount">maxCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_count LicensemanagerLicense#max_count}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.overage">overage</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#overage LicensemanagerLicense#overage}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#unit LicensemanagerLicense#unit}.

---

##### `allowCheckIn`<sup>Optional</sup> <a name="allowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.allowCheckIn"></a>

```typescript
public readonly allowCheckIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#allow_check_in LicensemanagerLicense#allow_check_in}.

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#max_count LicensemanagerLicense#max_count}.

---

##### `overage`<sup>Optional</sup> <a name="overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.overage"></a>

```typescript
public readonly overage: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#overage LicensemanagerLicense#overage}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}.

---

### LicensemanagerLicenseIssuer <a name="LicensemanagerLicenseIssuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

const licensemanagerLicenseIssuer: licensemanagerLicense.LicensemanagerLicenseIssuer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.signKey">signKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `signKey`<sup>Optional</sup> <a name="signKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.signKey"></a>

```typescript
public readonly signKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}.

---

### LicensemanagerLicenseLicenseMetadata <a name="LicensemanagerLicenseLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

const licensemanagerLicenseLicenseMetadata: licensemanagerLicense.LicensemanagerLicenseLicenseMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}.

---

### LicensemanagerLicenseTags <a name="LicensemanagerLicenseTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

const licensemanagerLicenseTags: licensemanagerLicense.LicensemanagerLicenseTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#key LicensemanagerLicense#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}

---

### LicensemanagerLicenseValidity <a name="LicensemanagerLicenseValidity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

const licensemanagerLicenseValidity: licensemanagerLicense.LicensemanagerLicenseValidity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.begin">begin</a></code> | <code>string</code> | Validity begin date for the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.end">end</a></code> | <code>string</code> | Validity begin date for the license. |

---

##### `begin`<sup>Required</sup> <a name="begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.begin"></a>

```typescript
public readonly begin: string;
```

- *Type:* string

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#begin LicensemanagerLicense#begin}

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/licensemanager_license#end LicensemanagerLicense#end}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetAllowEarlyCheckIn">resetAllowEarlyCheckIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetMaxTimeToLiveInMinutes">resetMaxTimeToLiveInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowEarlyCheckIn` <a name="resetAllowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetAllowEarlyCheckIn"></a>

```typescript
public resetAllowEarlyCheckIn(): void
```

##### `resetMaxTimeToLiveInMinutes` <a name="resetMaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetMaxTimeToLiveInMinutes"></a>

```typescript
public resetMaxTimeToLiveInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckInInput">allowEarlyCheckInInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutesInput">maxTimeToLiveInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn">allowEarlyCheckIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowEarlyCheckInInput`<sup>Optional</sup> <a name="allowEarlyCheckInInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckInInput"></a>

```typescript
public readonly allowEarlyCheckInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="maxTimeToLiveInMinutesInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutesInput"></a>

```typescript
public readonly maxTimeToLiveInMinutesInput: number;
```

- *Type:* number

---

##### `allowEarlyCheckIn`<sup>Required</sup> <a name="allowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn"></a>

```typescript
public readonly allowEarlyCheckIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxTimeToLiveInMinutes`<sup>Required</sup> <a name="maxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```typescript
public readonly maxTimeToLiveInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---


### LicensemanagerLicenseConsumptionConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration">putBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration">putProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetBorrowConfiguration">resetBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetProvisionalConfiguration">resetProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetRenewType">resetRenewType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBorrowConfiguration` <a name="putBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration"></a>

```typescript
public putBorrowConfiguration(value: LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---

##### `putProvisionalConfiguration` <a name="putProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration"></a>

```typescript
public putProvisionalConfiguration(value: LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---

##### `resetBorrowConfiguration` <a name="resetBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetBorrowConfiguration"></a>

```typescript
public resetBorrowConfiguration(): void
```

##### `resetProvisionalConfiguration` <a name="resetProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetProvisionalConfiguration"></a>

```typescript
public resetProvisionalConfiguration(): void
```

##### `resetRenewType` <a name="resetRenewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetRenewType"></a>

```typescript
public resetRenewType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration">borrowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration">provisionalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfigurationInput">borrowConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfigurationInput">provisionalConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewTypeInput">renewTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType">renewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `borrowConfiguration`<sup>Required</sup> <a name="borrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration"></a>

```typescript
public readonly borrowConfiguration: LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a>

---

##### `provisionalConfiguration`<sup>Required</sup> <a name="provisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration"></a>

```typescript
public readonly provisionalConfiguration: LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a>

---

##### `borrowConfigurationInput`<sup>Optional</sup> <a name="borrowConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfigurationInput"></a>

```typescript
public readonly borrowConfigurationInput: IResolvable | LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---

##### `provisionalConfigurationInput`<sup>Optional</sup> <a name="provisionalConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfigurationInput"></a>

```typescript
public readonly provisionalConfigurationInput: IResolvable | LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---

##### `renewTypeInput`<sup>Optional</sup> <a name="renewTypeInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewTypeInput"></a>

```typescript
public readonly renewTypeInput: string;
```

- *Type:* string

---

##### `renewType`<sup>Required</sup> <a name="renewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType"></a>

```typescript
public readonly renewType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseConsumptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---


### LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resetMaxTimeToLiveInMinutes">resetMaxTimeToLiveInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxTimeToLiveInMinutes` <a name="resetMaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resetMaxTimeToLiveInMinutes"></a>

```typescript
public resetMaxTimeToLiveInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutesInput">maxTimeToLiveInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes">maxTimeToLiveInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="maxTimeToLiveInMinutesInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutesInput"></a>

```typescript
public readonly maxTimeToLiveInMinutesInput: number;
```

- *Type:* number

---

##### `maxTimeToLiveInMinutes`<sup>Required</sup> <a name="maxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```typescript
public readonly maxTimeToLiveInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---


### LicensemanagerLicenseEntitlementsList <a name="LicensemanagerLicenseEntitlementsList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseEntitlementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseEntitlements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>[]

---


### LicensemanagerLicenseEntitlementsOutputReference <a name="LicensemanagerLicenseEntitlementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetAllowCheckIn">resetAllowCheckIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetMaxCount">resetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetOverage">resetOverage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCheckIn` <a name="resetAllowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetAllowCheckIn"></a>

```typescript
public resetAllowCheckIn(): void
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetMaxCount"></a>

```typescript
public resetMaxCount(): void
```

##### `resetOverage` <a name="resetOverage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetOverage"></a>

```typescript
public resetOverage(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckInInput">allowCheckInInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCountInput">maxCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overageInput">overageInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn">allowCheckIn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCount">maxCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overage">overage</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowCheckInInput`<sup>Optional</sup> <a name="allowCheckInInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckInInput"></a>

```typescript
public readonly allowCheckInInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCountInput"></a>

```typescript
public readonly maxCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overageInput`<sup>Optional</sup> <a name="overageInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overageInput"></a>

```typescript
public readonly overageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `allowCheckIn`<sup>Required</sup> <a name="allowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn"></a>

```typescript
public readonly allowCheckIn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCount"></a>

```typescript
public readonly maxCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overage`<sup>Required</sup> <a name="overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overage"></a>

```typescript
public readonly overage: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseEntitlements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements">LicensemanagerLicenseEntitlements</a>

---


### LicensemanagerLicenseIssuerOutputReference <a name="LicensemanagerLicenseIssuerOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resetSignKey">resetSignKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSignKey` <a name="resetSignKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resetSignKey"></a>

```typescript
public resetSignKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKeyInput">signKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKey">signKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `signKeyInput`<sup>Optional</sup> <a name="signKeyInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKeyInput"></a>

```typescript
public readonly signKeyInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signKey`<sup>Required</sup> <a name="signKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKey"></a>

```typescript
public readonly signKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseIssuer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---


### LicensemanagerLicenseLicenseMetadataList <a name="LicensemanagerLicenseLicenseMetadataList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseLicenseMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseLicenseMetadata[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>[]

---


### LicensemanagerLicenseLicenseMetadataOutputReference <a name="LicensemanagerLicenseLicenseMetadataOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseLicenseMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata">LicensemanagerLicenseLicenseMetadata</a>

---


### LicensemanagerLicenseTagsList <a name="LicensemanagerLicenseTagsList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get"></a>

```typescript
public get(index: number): LicensemanagerLicenseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>[]

---


### LicensemanagerLicenseTagsOutputReference <a name="LicensemanagerLicenseTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags">LicensemanagerLicenseTags</a>

---


### LicensemanagerLicenseValidityOutputReference <a name="LicensemanagerLicenseValidityOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer"></a>

```typescript
import { licensemanagerLicense } from '@cdktn/provider-awscc'

new licensemanagerLicense.LicensemanagerLicenseValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.beginInput">beginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.begin">begin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `beginInput`<sup>Optional</sup> <a name="beginInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.beginInput"></a>

```typescript
public readonly beginInput: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `begin`<sup>Required</sup> <a name="begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.begin"></a>

```typescript
public readonly begin: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerLicenseValidity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---



