# `inspectorv2CodeSecurityScanConfiguration` Submodule <a name="`inspectorv2CodeSecurityScanConfiguration` Submodule" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CodeSecurityScanConfiguration <a name="Inspectorv2CodeSecurityScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration awscc_inspectorv2_code_security_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration(scope: Construct, id: string, config?: Inspectorv2CodeSecurityScanConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig">Inspectorv2CodeSecurityScanConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig">Inspectorv2CodeSecurityScanConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putScopeSettings">putScopeSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetScopeSettings">resetScopeSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration"></a>

```typescript
public putConfiguration(value: Inspectorv2CodeSecurityScanConfigurationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

---

##### `putScopeSettings` <a name="putScopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putScopeSettings"></a>

```typescript
public putScopeSettings(value: Inspectorv2CodeSecurityScanConfigurationScopeSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.putScopeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetName"></a>

```typescript
public resetName(): void
```

##### `resetScopeSettings` <a name="resetScopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetScopeSettings"></a>

```typescript
public resetScopeSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Inspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isConstruct"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformElement"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformResource"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Inspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Inspectorv2CodeSecurityScanConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Inspectorv2CodeSecurityScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CodeSecurityScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettings">scopeSettings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference">Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettingsInput">scopeSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configuration"></a>

```typescript
public readonly configuration: Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scopeSettings`<sup>Required</sup> <a name="scopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettings"></a>

```typescript
public readonly scopeSettings: Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference">Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeSettingsInput`<sup>Optional</sup> <a name="scopeSettingsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.scopeSettingsInput"></a>

```typescript
public readonly scopeSettingsInput: IResolvable | Inspectorv2CodeSecurityScanConfigurationScopeSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CodeSecurityScanConfigurationConfig <a name="Inspectorv2CodeSecurityScanConfigurationConfig" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.Initializer"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CodeSecurityScanConfigurationConfig: inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | Code Security Scan Configuration. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.level">level</a></code> | <code>string</code> | Configuration Level. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.name">name</a></code> | <code>string</code> | Code Security Scan Configuration name. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.scopeSettings">scopeSettings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | Scope Settings. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#tags Inspectorv2CodeSecurityScanConfiguration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.configuration"></a>

```typescript
public readonly configuration: Inspectorv2CodeSecurityScanConfigurationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

Code Security Scan Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#configuration Inspectorv2CodeSecurityScanConfiguration#configuration}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

Configuration Level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#level Inspectorv2CodeSecurityScanConfiguration#level}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Code Security Scan Configuration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#name Inspectorv2CodeSecurityScanConfiguration#name}

---

##### `scopeSettings`<sup>Optional</sup> <a name="scopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.scopeSettings"></a>

```typescript
public readonly scopeSettings: Inspectorv2CodeSecurityScanConfigurationScopeSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

Scope Settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#scope_settings Inspectorv2CodeSecurityScanConfiguration#scope_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#tags Inspectorv2CodeSecurityScanConfiguration#tags}.

---

### Inspectorv2CodeSecurityScanConfigurationConfiguration <a name="Inspectorv2CodeSecurityScanConfigurationConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.Initializer"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CodeSecurityScanConfigurationConfiguration: inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.continuousIntegrationScanConfiguration">continuousIntegrationScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#continuous_integration_scan_configuration Inspectorv2CodeSecurityScanConfiguration#continuous_integration_scan_configuration}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.periodicScanConfiguration">periodicScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#periodic_scan_configuration Inspectorv2CodeSecurityScanConfiguration#periodic_scan_configuration}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.ruleSetCategories">ruleSetCategories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#rule_set_categories Inspectorv2CodeSecurityScanConfiguration#rule_set_categories}. |

---

##### `continuousIntegrationScanConfiguration`<sup>Optional</sup> <a name="continuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.continuousIntegrationScanConfiguration"></a>

```typescript
public readonly continuousIntegrationScanConfiguration: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#continuous_integration_scan_configuration Inspectorv2CodeSecurityScanConfiguration#continuous_integration_scan_configuration}.

---

##### `periodicScanConfiguration`<sup>Optional</sup> <a name="periodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.periodicScanConfiguration"></a>

```typescript
public readonly periodicScanConfiguration: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#periodic_scan_configuration Inspectorv2CodeSecurityScanConfiguration#periodic_scan_configuration}.

---

##### `ruleSetCategories`<sup>Optional</sup> <a name="ruleSetCategories" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration.property.ruleSetCategories"></a>

```typescript
public readonly ruleSetCategories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#rule_set_categories Inspectorv2CodeSecurityScanConfiguration#rule_set_categories}.

---

### Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.Initializer"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration: inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.property.supportedEvents">supportedEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#supported_events Inspectorv2CodeSecurityScanConfiguration#supported_events}. |

---

##### `supportedEvents`<sup>Optional</sup> <a name="supportedEvents" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.property.supportedEvents"></a>

```typescript
public readonly supportedEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#supported_events Inspectorv2CodeSecurityScanConfiguration#supported_events}.

---

### Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.Initializer"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration: inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequency">frequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency Inspectorv2CodeSecurityScanConfiguration#frequency}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequencyExpression">frequencyExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency_expression Inspectorv2CodeSecurityScanConfiguration#frequency_expression}. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency Inspectorv2CodeSecurityScanConfiguration#frequency}.

---

##### `frequencyExpression`<sup>Optional</sup> <a name="frequencyExpression" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.property.frequencyExpression"></a>

```typescript
public readonly frequencyExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#frequency_expression Inspectorv2CodeSecurityScanConfiguration#frequency_expression}.

---

### Inspectorv2CodeSecurityScanConfigurationScopeSettings <a name="Inspectorv2CodeSecurityScanConfigurationScopeSettings" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings.Initializer"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CodeSecurityScanConfigurationScopeSettings: inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings.property.projectSelectionScope">projectSelectionScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#project_selection_scope Inspectorv2CodeSecurityScanConfiguration#project_selection_scope}. |

---

##### `projectSelectionScope`<sup>Optional</sup> <a name="projectSelectionScope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings.property.projectSelectionScope"></a>

```typescript
public readonly projectSelectionScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_scan_configuration#project_selection_scope Inspectorv2CodeSecurityScanConfiguration#project_selection_scope}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resetSupportedEvents">resetSupportedEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSupportedEvents` <a name="resetSupportedEvents" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resetSupportedEvents"></a>

```typescript
public resetSupportedEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEventsInput">supportedEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEvents">supportedEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `supportedEventsInput`<sup>Optional</sup> <a name="supportedEventsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEventsInput"></a>

```typescript
public readonly supportedEventsInput: string[];
```

- *Type:* string[]

---

##### `supportedEvents`<sup>Required</sup> <a name="supportedEvents" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEvents"></a>

```typescript
public readonly supportedEvents: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

---


### Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putContinuousIntegrationScanConfiguration">putContinuousIntegrationScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putPeriodicScanConfiguration">putPeriodicScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetContinuousIntegrationScanConfiguration">resetContinuousIntegrationScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetPeriodicScanConfiguration">resetPeriodicScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetRuleSetCategories">resetRuleSetCategories</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContinuousIntegrationScanConfiguration` <a name="putContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putContinuousIntegrationScanConfiguration"></a>

```typescript
public putContinuousIntegrationScanConfiguration(value: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putContinuousIntegrationScanConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

---

##### `putPeriodicScanConfiguration` <a name="putPeriodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putPeriodicScanConfiguration"></a>

```typescript
public putPeriodicScanConfiguration(value: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.putPeriodicScanConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

---

##### `resetContinuousIntegrationScanConfiguration` <a name="resetContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetContinuousIntegrationScanConfiguration"></a>

```typescript
public resetContinuousIntegrationScanConfiguration(): void
```

##### `resetPeriodicScanConfiguration` <a name="resetPeriodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetPeriodicScanConfiguration"></a>

```typescript
public resetPeriodicScanConfiguration(): void
```

##### `resetRuleSetCategories` <a name="resetRuleSetCategories" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resetRuleSetCategories"></a>

```typescript
public resetRuleSetCategories(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfiguration">continuousIntegrationScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfiguration">periodicScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfigurationInput">continuousIntegrationScanConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfigurationInput">periodicScanConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategoriesInput">ruleSetCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategories">ruleSetCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continuousIntegrationScanConfiguration`<sup>Required</sup> <a name="continuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfiguration"></a>

```typescript
public readonly continuousIntegrationScanConfiguration: Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference</a>

---

##### `periodicScanConfiguration`<sup>Required</sup> <a name="periodicScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfiguration"></a>

```typescript
public readonly periodicScanConfiguration: Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference</a>

---

##### `continuousIntegrationScanConfigurationInput`<sup>Optional</sup> <a name="continuousIntegrationScanConfigurationInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfigurationInput"></a>

```typescript
public readonly continuousIntegrationScanConfigurationInput: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

---

##### `periodicScanConfigurationInput`<sup>Optional</sup> <a name="periodicScanConfigurationInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfigurationInput"></a>

```typescript
public readonly periodicScanConfigurationInput: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

---

##### `ruleSetCategoriesInput`<sup>Optional</sup> <a name="ruleSetCategoriesInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategoriesInput"></a>

```typescript
public readonly ruleSetCategoriesInput: string[];
```

- *Type:* string[]

---

##### `ruleSetCategories`<sup>Required</sup> <a name="ruleSetCategories" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategories"></a>

```typescript
public readonly ruleSetCategories: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfiguration">Inspectorv2CodeSecurityScanConfigurationConfiguration</a>

---


### Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequencyExpression">resetFrequencyExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrequency` <a name="resetFrequency" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetFrequencyExpression` <a name="resetFrequencyExpression" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resetFrequencyExpression"></a>

```typescript
public resetFrequencyExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpressionInput">frequencyExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpression">frequencyExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencyExpressionInput`<sup>Optional</sup> <a name="frequencyExpressionInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpressionInput"></a>

```typescript
public readonly frequencyExpressionInput: string;
```

- *Type:* string

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `frequencyExpression`<sup>Required</sup> <a name="frequencyExpression" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpression"></a>

```typescript
public readonly frequencyExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">Inspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

---


### Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference <a name="Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer"></a>

```typescript
import { inspectorv2CodeSecurityScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resetProjectSelectionScope">resetProjectSelectionScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectSelectionScope` <a name="resetProjectSelectionScope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resetProjectSelectionScope"></a>

```typescript
public resetProjectSelectionScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScopeInput">projectSelectionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScope">projectSelectionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectSelectionScopeInput`<sup>Optional</sup> <a name="projectSelectionScopeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScopeInput"></a>

```typescript
public readonly projectSelectionScopeInput: string;
```

- *Type:* string

---

##### `projectSelectionScope`<sup>Required</sup> <a name="projectSelectionScope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScope"></a>

```typescript
public readonly projectSelectionScope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CodeSecurityScanConfigurationScopeSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityScanConfiguration.Inspectorv2CodeSecurityScanConfigurationScopeSettings">Inspectorv2CodeSecurityScanConfigurationScopeSettings</a>

---



