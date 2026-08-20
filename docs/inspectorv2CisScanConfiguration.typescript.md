# `inspectorv2CisScanConfiguration` Submodule <a name="`inspectorv2CisScanConfiguration` Submodule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CisScanConfiguration <a name="Inspectorv2CisScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration(scope: Construct, id: string, config: Inspectorv2CisScanConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig">Inspectorv2CisScanConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig">Inspectorv2CisScanConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule"></a>

```typescript
public putSchedule(value: Inspectorv2CisScanConfigurationSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

---

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets"></a>

```typescript
public putTargets(value: Inspectorv2CisScanConfigurationTargets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Inspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Inspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Inspectorv2CisScanConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Inspectorv2CisScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CisScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference">Inspectorv2CisScanConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference">Inspectorv2CisScanConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanNameInput">scanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targetsInput">targetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanName">scanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.schedule"></a>

```typescript
public readonly schedule: Inspectorv2CisScanConfigurationScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference">Inspectorv2CisScanConfigurationScheduleOutputReference</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targets"></a>

```typescript
public readonly targets: Inspectorv2CisScanConfigurationTargetsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference">Inspectorv2CisScanConfigurationTargetsOutputReference</a>

---

##### `scanNameInput`<sup>Optional</sup> <a name="scanNameInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanNameInput"></a>

```typescript
public readonly scanNameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | Inspectorv2CisScanConfigurationSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | Inspectorv2CisScanConfigurationTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

---

##### `scanName`<sup>Required</sup> <a name="scanName" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanName"></a>

```typescript
public readonly scanName: string;
```

- *Type:* string

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CisScanConfigurationConfig <a name="Inspectorv2CisScanConfigurationConfig" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CisScanConfigurationConfig: inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.scanName">scanName</a></code> | <code>string</code> | Name of the scan. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | Choose a Schedule cadence. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.securityLevel">securityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `scanName`<sup>Required</sup> <a name="scanName" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.scanName"></a>

```typescript
public readonly scanName: string;
```

- *Type:* string

Name of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#scan_name Inspectorv2CisScanConfiguration#scan_name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.schedule"></a>

```typescript
public readonly schedule: Inspectorv2CisScanConfigurationSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

Choose a Schedule cadence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#schedule Inspectorv2CisScanConfiguration#schedule}

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.targets"></a>

```typescript
public readonly targets: Inspectorv2CisScanConfigurationTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}.

---

### Inspectorv2CisScanConfigurationSchedule <a name="Inspectorv2CisScanConfigurationSchedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CisScanConfigurationSchedule: inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.daily">daily</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#daily Inspectorv2CisScanConfiguration#daily}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.monthly">monthly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#monthly Inspectorv2CisScanConfiguration#monthly}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.oneTime">oneTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#one_time Inspectorv2CisScanConfiguration#one_time}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.weekly">weekly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#weekly Inspectorv2CisScanConfiguration#weekly}. |

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.daily"></a>

```typescript
public readonly daily: Inspectorv2CisScanConfigurationScheduleDaily;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#daily Inspectorv2CisScanConfiguration#daily}.

---

##### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.monthly"></a>

```typescript
public readonly monthly: Inspectorv2CisScanConfigurationScheduleMonthly;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#monthly Inspectorv2CisScanConfiguration#monthly}.

---

##### `oneTime`<sup>Optional</sup> <a name="oneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.oneTime"></a>

```typescript
public readonly oneTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#one_time Inspectorv2CisScanConfiguration#one_time}.

---

##### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.weekly"></a>

```typescript
public readonly weekly: Inspectorv2CisScanConfigurationScheduleWeekly;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#weekly Inspectorv2CisScanConfiguration#weekly}.

---

### Inspectorv2CisScanConfigurationScheduleDaily <a name="Inspectorv2CisScanConfigurationScheduleDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CisScanConfigurationScheduleDaily: inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.property.startTime"></a>

```typescript
public readonly startTime: Inspectorv2CisScanConfigurationScheduleDailyStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleDailyStartTime <a name="Inspectorv2CisScanConfigurationScheduleDailyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CisScanConfigurationScheduleDailyStartTime: inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `timeOfDay`<sup>Optional</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationScheduleMonthly <a name="Inspectorv2CisScanConfigurationScheduleMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CisScanConfigurationScheduleMonthly: inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.day">day</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#day Inspectorv2CisScanConfiguration#day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#day Inspectorv2CisScanConfiguration#day}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.startTime"></a>

```typescript
public readonly startTime: Inspectorv2CisScanConfigurationScheduleMonthlyStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleMonthlyStartTime <a name="Inspectorv2CisScanConfigurationScheduleMonthlyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CisScanConfigurationScheduleMonthlyStartTime: inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `timeOfDay`<sup>Optional</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationScheduleWeekly <a name="Inspectorv2CisScanConfigurationScheduleWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CisScanConfigurationScheduleWeekly: inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.days">days</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#days Inspectorv2CisScanConfiguration#days}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.days"></a>

```typescript
public readonly days: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#days Inspectorv2CisScanConfiguration#days}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.startTime"></a>

```typescript
public readonly startTime: Inspectorv2CisScanConfigurationScheduleWeeklyStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleWeeklyStartTime <a name="Inspectorv2CisScanConfigurationScheduleWeeklyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CisScanConfigurationScheduleWeeklyStartTime: inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `timeOfDay`<sup>Optional</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationTargets <a name="Inspectorv2CisScanConfigurationTargets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

const inspectorv2CisScanConfigurationTargets: inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.accountIds">accountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#account_ids Inspectorv2CisScanConfiguration#account_ids}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.targetResourceTags">targetResourceTags</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#target_resource_tags Inspectorv2CisScanConfiguration#target_resource_tags}. |

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#account_ids Inspectorv2CisScanConfiguration#account_ids}.

---

##### `targetResourceTags`<sup>Required</sup> <a name="targetResourceTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.targetResourceTags"></a>

```typescript
public readonly targetResourceTags: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/inspectorv2_cis_scan_configuration#target_resource_tags Inspectorv2CisScanConfiguration#target_resource_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CisScanConfigurationScheduleDailyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleDailyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: Inspectorv2CisScanConfigurationScheduleDailyStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: IResolvable | Inspectorv2CisScanConfigurationScheduleDailyStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CisScanConfigurationScheduleDaily;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

---


### Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeOfDay">resetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeOfDay` <a name="resetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeOfDay"></a>

```typescript
public resetTimeOfDay(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDayInput"></a>

```typescript
public readonly timeOfDayInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CisScanConfigurationScheduleDailyStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---


### Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: Inspectorv2CisScanConfigurationScheduleMonthlyStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---

##### `resetDay` <a name="resetDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: IResolvable | Inspectorv2CisScanConfigurationScheduleMonthlyStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CisScanConfigurationScheduleMonthly;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

---


### Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeOfDay">resetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeOfDay` <a name="resetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeOfDay"></a>

```typescript
public resetTimeOfDay(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDayInput"></a>

```typescript
public readonly timeOfDayInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CisScanConfigurationScheduleMonthlyStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---


### Inspectorv2CisScanConfigurationScheduleOutputReference <a name="Inspectorv2CisScanConfigurationScheduleOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily">putDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly">putMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly">putWeekly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetMonthly">resetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetOneTime">resetOneTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetWeekly">resetWeekly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaily` <a name="putDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily"></a>

```typescript
public putDaily(value: Inspectorv2CisScanConfigurationScheduleDaily): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

---

##### `putMonthly` <a name="putMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly"></a>

```typescript
public putMonthly(value: Inspectorv2CisScanConfigurationScheduleMonthly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

---

##### `putWeekly` <a name="putWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly"></a>

```typescript
public putWeekly(value: Inspectorv2CisScanConfigurationScheduleWeekly): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

---

##### `resetDaily` <a name="resetDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetDaily"></a>

```typescript
public resetDaily(): void
```

##### `resetMonthly` <a name="resetMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetMonthly"></a>

```typescript
public resetMonthly(): void
```

##### `resetOneTime` <a name="resetOneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetOneTime"></a>

```typescript
public resetOneTime(): void
```

##### `resetWeekly` <a name="resetWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetWeekly"></a>

```typescript
public resetWeekly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference">Inspectorv2CisScanConfigurationScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.dailyInput">dailyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthlyInput">monthlyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTimeInput">oneTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weeklyInput">weeklyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime">oneTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.daily"></a>

```typescript
public readonly daily: Inspectorv2CisScanConfigurationScheduleDailyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference">Inspectorv2CisScanConfigurationScheduleDailyOutputReference</a>

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthly"></a>

```typescript
public readonly monthly: Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a>

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weekly"></a>

```typescript
public readonly weekly: Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.dailyInput"></a>

```typescript
public readonly dailyInput: IResolvable | Inspectorv2CisScanConfigurationScheduleDaily;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

---

##### `monthlyInput`<sup>Optional</sup> <a name="monthlyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthlyInput"></a>

```typescript
public readonly monthlyInput: IResolvable | Inspectorv2CisScanConfigurationScheduleMonthly;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

---

##### `oneTimeInput`<sup>Optional</sup> <a name="oneTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTimeInput"></a>

```typescript
public readonly oneTimeInput: string;
```

- *Type:* string

---

##### `weeklyInput`<sup>Optional</sup> <a name="weeklyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weeklyInput"></a>

```typescript
public readonly weeklyInput: IResolvable | Inspectorv2CisScanConfigurationScheduleWeekly;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

---

##### `oneTime`<sup>Required</sup> <a name="oneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime"></a>

```typescript
public readonly oneTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CisScanConfigurationSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

---


### Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: Inspectorv2CisScanConfigurationScheduleWeeklyStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---

##### `resetDays` <a name="resetDays" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetDays"></a>

```typescript
public resetDays(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.daysInput">daysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days">days</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a>

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.daysInput"></a>

```typescript
public readonly daysInput: string[];
```

- *Type:* string[]

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: IResolvable | Inspectorv2CisScanConfigurationScheduleWeeklyStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days"></a>

```typescript
public readonly days: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CisScanConfigurationScheduleWeekly;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

---


### Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeOfDay">resetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeOfDay` <a name="resetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeOfDay"></a>

```typescript
public resetTimeOfDay(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDayInput"></a>

```typescript
public readonly timeOfDayInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay"></a>

```typescript
public readonly timeOfDay: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CisScanConfigurationScheduleWeeklyStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---


### Inspectorv2CisScanConfigurationTargetsOutputReference <a name="Inspectorv2CisScanConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer"></a>

```typescript
import { inspectorv2CisScanConfiguration } from '@cdktn/provider-awscc'

new inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTagsInput">targetResourceTagsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags">targetResourceTags</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: string[];
```

- *Type:* string[]

---

##### `targetResourceTagsInput`<sup>Optional</sup> <a name="targetResourceTagsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTagsInput"></a>

```typescript
public readonly targetResourceTagsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `targetResourceTags`<sup>Required</sup> <a name="targetResourceTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags"></a>

```typescript
public readonly targetResourceTags: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Inspectorv2CisScanConfigurationTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

---



