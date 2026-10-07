# `applicationsignalsInstrumentationConfig` Submodule <a name="`applicationsignalsInstrumentationConfig` Submodule" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationsignalsInstrumentationConfig <a name="ApplicationsignalsInstrumentationConfig" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig(scope: Construct, id: string, config: ApplicationsignalsInstrumentationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig">ApplicationsignalsInstrumentationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig">ApplicationsignalsInstrumentationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration">putCaptureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetAttributeFilters">resetAttributeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCaptureConfiguration` <a name="putCaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration"></a>

```typescript
public putCaptureConfiguration(value: ApplicationsignalsInstrumentationConfigCaptureConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation"></a>

```typescript
public putLocation(value: ApplicationsignalsInstrumentationConfigLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags"></a>

```typescript
public putTags(value: IResolvable | ApplicationsignalsInstrumentationConfigTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]

---

##### `resetAttributeFilters` <a name="resetAttributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetAttributeFilters"></a>

```typescript
public resetAttributeFilters(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetExpiresAt"></a>

```typescript
public resetExpiresAt(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationsignalsInstrumentationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationsignalsInstrumentationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationsignalsInstrumentationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfiguration">captureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationHash">locationHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList">ApplicationsignalsInstrumentationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFiltersInput">attributeFiltersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfigurationInput">captureConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAtInput">expiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationTypeInput">instrumentationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationInput">locationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalTypeInput">signalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFilters">attributeFilters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationType">instrumentationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalType">signalType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `captureConfiguration`<sup>Required</sup> <a name="captureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfiguration"></a>

```typescript
public readonly captureConfiguration: ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.location"></a>

```typescript
public readonly location: ApplicationsignalsInstrumentationConfigLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationOutputReference</a>

---

##### `locationHash`<sup>Required</sup> <a name="locationHash" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationHash"></a>

```typescript
public readonly locationHash: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tags"></a>

```typescript
public readonly tags: ApplicationsignalsInstrumentationConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList">ApplicationsignalsInstrumentationConfigTagsList</a>

---

##### `attributeFiltersInput`<sup>Optional</sup> <a name="attributeFiltersInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFiltersInput"></a>

```typescript
public readonly attributeFiltersInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `captureConfigurationInput`<sup>Optional</sup> <a name="captureConfigurationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfigurationInput"></a>

```typescript
public readonly captureConfigurationInput: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAtInput"></a>

```typescript
public readonly expiresAtInput: string;
```

- *Type:* string

---

##### `instrumentationTypeInput`<sup>Optional</sup> <a name="instrumentationTypeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationTypeInput"></a>

```typescript
public readonly instrumentationTypeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | ApplicationsignalsInstrumentationConfigLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `signalTypeInput`<sup>Optional</sup> <a name="signalTypeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalTypeInput"></a>

```typescript
public readonly signalTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApplicationsignalsInstrumentationConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]

---

##### `attributeFilters`<sup>Required</sup> <a name="attributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFilters"></a>

```typescript
public readonly attributeFilters: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `instrumentationType`<sup>Required</sup> <a name="instrumentationType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationType"></a>

```typescript
public readonly instrumentationType: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `signalType`<sup>Required</sup> <a name="signalType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalType"></a>

```typescript
public readonly signalType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationsignalsInstrumentationConfigCaptureConfiguration <a name="ApplicationsignalsInstrumentationConfigCaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const applicationsignalsInstrumentationConfigCaptureConfiguration: applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.property.codeCapture">codeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | Defines what data to capture for code-level instrumentation. |

---

##### `codeCapture`<sup>Required</sup> <a name="codeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.property.codeCapture"></a>

```typescript
public readonly codeCapture: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

Defines what data to capture for code-level instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_capture ApplicationsignalsInstrumentationConfig#code_capture}

---

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const applicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture: applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLimits">captureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | Safety limits that bound what is captured. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureArguments">captureArguments</a></code> | <code>string[]</code> | The function arguments to capture. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLocals">captureLocals</a></code> | <code>string[]</code> | The local variables to capture by name. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureReturn">captureReturn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to capture the return value. Defaults to false. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureStackTrace">captureStackTrace</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to capture a stack trace. Defaults to true. |

---

##### `captureLimits`<sup>Required</sup> <a name="captureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLimits"></a>

```typescript
public readonly captureLimits: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

Safety limits that bound what is captured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_limits ApplicationsignalsInstrumentationConfig#capture_limits}

---

##### `captureArguments`<sup>Optional</sup> <a name="captureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureArguments"></a>

```typescript
public readonly captureArguments: string[];
```

- *Type:* string[]

The function arguments to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_arguments ApplicationsignalsInstrumentationConfig#capture_arguments}

---

##### `captureLocals`<sup>Optional</sup> <a name="captureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLocals"></a>

```typescript
public readonly captureLocals: string[];
```

- *Type:* string[]

The local variables to capture by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_locals ApplicationsignalsInstrumentationConfig#capture_locals}

---

##### `captureReturn`<sup>Optional</sup> <a name="captureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureReturn"></a>

```typescript
public readonly captureReturn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to capture the return value. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_return ApplicationsignalsInstrumentationConfig#capture_return}

---

##### `captureStackTrace`<sup>Optional</sup> <a name="captureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureStackTrace"></a>

```typescript
public readonly captureStackTrace: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to capture a stack trace. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_stack_trace ApplicationsignalsInstrumentationConfig#capture_stack_trace}

---

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const applicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits: applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionDepth">maxCollectionDepth</a></code> | <code>number</code> | Maximum nesting depth to traverse inside collections. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionWidth">maxCollectionWidth</a></code> | <code>number</code> | Maximum number of items to capture from any collection. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxFieldsPerObject">maxFieldsPerObject</a></code> | <code>number</code> | Maximum number of fields to capture for any object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxHits">maxHits</a></code> | <code>number</code> | Maximum number of times the instrumentation point can be hit before disabled. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxObjectDepth">maxObjectDepth</a></code> | <code>number</code> | Maximum depth for nested object traversal. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackFrames">maxStackFrames</a></code> | <code>number</code> | Maximum number of stack frames to capture. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackTraceSize">maxStackTraceSize</a></code> | <code>number</code> | Maximum total size in bytes of a captured stack trace. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStringLength">maxStringLength</a></code> | <code>number</code> | Maximum length of captured string values in characters. |

---

##### `maxCollectionDepth`<sup>Optional</sup> <a name="maxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionDepth"></a>

```typescript
public readonly maxCollectionDepth: number;
```

- *Type:* number

Maximum nesting depth to traverse inside collections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_depth ApplicationsignalsInstrumentationConfig#max_collection_depth}

---

##### `maxCollectionWidth`<sup>Optional</sup> <a name="maxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionWidth"></a>

```typescript
public readonly maxCollectionWidth: number;
```

- *Type:* number

Maximum number of items to capture from any collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_width ApplicationsignalsInstrumentationConfig#max_collection_width}

---

##### `maxFieldsPerObject`<sup>Optional</sup> <a name="maxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxFieldsPerObject"></a>

```typescript
public readonly maxFieldsPerObject: number;
```

- *Type:* number

Maximum number of fields to capture for any object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_fields_per_object ApplicationsignalsInstrumentationConfig#max_fields_per_object}

---

##### `maxHits`<sup>Optional</sup> <a name="maxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxHits"></a>

```typescript
public readonly maxHits: number;
```

- *Type:* number

Maximum number of times the instrumentation point can be hit before disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_hits ApplicationsignalsInstrumentationConfig#max_hits}

---

##### `maxObjectDepth`<sup>Optional</sup> <a name="maxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxObjectDepth"></a>

```typescript
public readonly maxObjectDepth: number;
```

- *Type:* number

Maximum depth for nested object traversal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_object_depth ApplicationsignalsInstrumentationConfig#max_object_depth}

---

##### `maxStackFrames`<sup>Optional</sup> <a name="maxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackFrames"></a>

```typescript
public readonly maxStackFrames: number;
```

- *Type:* number

Maximum number of stack frames to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_frames ApplicationsignalsInstrumentationConfig#max_stack_frames}

---

##### `maxStackTraceSize`<sup>Optional</sup> <a name="maxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackTraceSize"></a>

```typescript
public readonly maxStackTraceSize: number;
```

- *Type:* number

Maximum total size in bytes of a captured stack trace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_trace_size ApplicationsignalsInstrumentationConfig#max_stack_trace_size}

---

##### `maxStringLength`<sup>Optional</sup> <a name="maxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStringLength"></a>

```typescript
public readonly maxStringLength: number;
```

- *Type:* number

Maximum length of captured string values in characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_string_length ApplicationsignalsInstrumentationConfig#max_string_length}

---

### ApplicationsignalsInstrumentationConfigConfig <a name="ApplicationsignalsInstrumentationConfigConfig" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const applicationsignalsInstrumentationConfigConfig: applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.captureConfiguration">captureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | Specifies what to capture when the instrumentation point is hit. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.environment">environment</a></code> | <code>string</code> | The environment that the service is running in. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.instrumentationType">instrumentationType</a></code> | <code>string</code> | Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted). |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | The location where instrumentation should be applied. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.service">service</a></code> | <code>string</code> | The name of the service to instrument. This should match the service.name resource attribute reported by the application. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.signalType">signalType</a></code> | <code>string</code> | The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.attributeFilters">attributeFilters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.description">description</a></code> | <code>string</code> | An optional short description that explains the purpose of this instrumentation. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.expiresAt">expiresAt</a></code> | <code>string</code> | The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]</code> | An optional list of key-value pairs to associate with the instrumentation configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `captureConfiguration`<sup>Required</sup> <a name="captureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.captureConfiguration"></a>

```typescript
public readonly captureConfiguration: ApplicationsignalsInstrumentationConfigCaptureConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

Specifies what to capture when the instrumentation point is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_configuration ApplicationsignalsInstrumentationConfig#capture_configuration}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment that the service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#environment ApplicationsignalsInstrumentationConfig#environment}

---

##### `instrumentationType`<sup>Required</sup> <a name="instrumentationType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.instrumentationType"></a>

```typescript
public readonly instrumentationType: string;
```

- *Type:* string

Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#instrumentation_type ApplicationsignalsInstrumentationConfig#instrumentation_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.location"></a>

```typescript
public readonly location: ApplicationsignalsInstrumentationConfigLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

The location where instrumentation should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#location ApplicationsignalsInstrumentationConfig#location}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the service to instrument. This should match the service.name resource attribute reported by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#service ApplicationsignalsInstrumentationConfig#service}

---

##### `signalType`<sup>Required</sup> <a name="signalType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.signalType"></a>

```typescript
public readonly signalType: string;
```

- *Type:* string

The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#signal_type ApplicationsignalsInstrumentationConfig#signal_type}

---

##### `attributeFilters`<sup>Optional</sup> <a name="attributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.attributeFilters"></a>

```typescript
public readonly attributeFilters: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#attribute_filters ApplicationsignalsInstrumentationConfig#attribute_filters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional short description that explains the purpose of this instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#description ApplicationsignalsInstrumentationConfig#description}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#expires_at ApplicationsignalsInstrumentationConfig#expires_at}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApplicationsignalsInstrumentationConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]

An optional list of key-value pairs to associate with the instrumentation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#tags ApplicationsignalsInstrumentationConfig#tags}

---

### ApplicationsignalsInstrumentationConfigLocation <a name="ApplicationsignalsInstrumentationConfigLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const applicationsignalsInstrumentationConfigLocation: applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.property.codeLocation">codeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | Identifies a code location to instrument. |

---

##### `codeLocation`<sup>Required</sup> <a name="codeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.property.codeLocation"></a>

```typescript
public readonly codeLocation: ApplicationsignalsInstrumentationConfigLocationCodeLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

Identifies a code location to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_location ApplicationsignalsInstrumentationConfig#code_location}

---

### ApplicationsignalsInstrumentationConfigLocationCodeLocation <a name="ApplicationsignalsInstrumentationConfigLocationCodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const applicationsignalsInstrumentationConfigLocationCodeLocation: applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.filePath">filePath</a></code> | <code>string</code> | The source file path relative to the project or source root. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.language">language</a></code> | <code>string</code> | The programming language for this instrumentation point. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.className">className</a></code> | <code>string</code> | The class or type name that contains the method. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.codeUnit">codeUnit</a></code> | <code>string</code> | The package, module, or namespace that contains the target code. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.lineNumber">lineNumber</a></code> | <code>number</code> | The line number to instrument. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.methodName">methodName</a></code> | <code>string</code> | The method or function name to instrument. |

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

The source file path relative to the project or source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#file_path ApplicationsignalsInstrumentationConfig#file_path}

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

The programming language for this instrumentation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#language ApplicationsignalsInstrumentationConfig#language}

---

##### `className`<sup>Optional</sup> <a name="className" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.className"></a>

```typescript
public readonly className: string;
```

- *Type:* string

The class or type name that contains the method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#class_name ApplicationsignalsInstrumentationConfig#class_name}

---

##### `codeUnit`<sup>Optional</sup> <a name="codeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.codeUnit"></a>

```typescript
public readonly codeUnit: string;
```

- *Type:* string

The package, module, or namespace that contains the target code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_unit ApplicationsignalsInstrumentationConfig#code_unit}

---

##### `lineNumber`<sup>Optional</sup> <a name="lineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.lineNumber"></a>

```typescript
public readonly lineNumber: number;
```

- *Type:* number

The line number to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#line_number ApplicationsignalsInstrumentationConfig#line_number}

---

##### `methodName`<sup>Optional</sup> <a name="methodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.methodName"></a>

```typescript
public readonly methodName: string;
```

- *Type:* string

The method or function name to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#method_name ApplicationsignalsInstrumentationConfig#method_name}

---

### ApplicationsignalsInstrumentationConfigTags <a name="ApplicationsignalsInstrumentationConfigTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

const applicationsignalsInstrumentationConfigTags: applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#key ApplicationsignalsInstrumentationConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#value ApplicationsignalsInstrumentationConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionDepth">resetMaxCollectionDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionWidth">resetMaxCollectionWidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxFieldsPerObject">resetMaxFieldsPerObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxHits">resetMaxHits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxObjectDepth">resetMaxObjectDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackFrames">resetMaxStackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackTraceSize">resetMaxStackTraceSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStringLength">resetMaxStringLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxCollectionDepth` <a name="resetMaxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionDepth"></a>

```typescript
public resetMaxCollectionDepth(): void
```

##### `resetMaxCollectionWidth` <a name="resetMaxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionWidth"></a>

```typescript
public resetMaxCollectionWidth(): void
```

##### `resetMaxFieldsPerObject` <a name="resetMaxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxFieldsPerObject"></a>

```typescript
public resetMaxFieldsPerObject(): void
```

##### `resetMaxHits` <a name="resetMaxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxHits"></a>

```typescript
public resetMaxHits(): void
```

##### `resetMaxObjectDepth` <a name="resetMaxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxObjectDepth"></a>

```typescript
public resetMaxObjectDepth(): void
```

##### `resetMaxStackFrames` <a name="resetMaxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackFrames"></a>

```typescript
public resetMaxStackFrames(): void
```

##### `resetMaxStackTraceSize` <a name="resetMaxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackTraceSize"></a>

```typescript
public resetMaxStackTraceSize(): void
```

##### `resetMaxStringLength` <a name="resetMaxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStringLength"></a>

```typescript
public resetMaxStringLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepthInput">maxCollectionDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidthInput">maxCollectionWidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObjectInput">maxFieldsPerObjectInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHitsInput">maxHitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepthInput">maxObjectDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFramesInput">maxStackFramesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSizeInput">maxStackTraceSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLengthInput">maxStringLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth">maxCollectionDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth">maxCollectionWidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject">maxFieldsPerObject</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits">maxHits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth">maxObjectDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames">maxStackFrames</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize">maxStackTraceSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength">maxStringLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxCollectionDepthInput`<sup>Optional</sup> <a name="maxCollectionDepthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepthInput"></a>

```typescript
public readonly maxCollectionDepthInput: number;
```

- *Type:* number

---

##### `maxCollectionWidthInput`<sup>Optional</sup> <a name="maxCollectionWidthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidthInput"></a>

```typescript
public readonly maxCollectionWidthInput: number;
```

- *Type:* number

---

##### `maxFieldsPerObjectInput`<sup>Optional</sup> <a name="maxFieldsPerObjectInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObjectInput"></a>

```typescript
public readonly maxFieldsPerObjectInput: number;
```

- *Type:* number

---

##### `maxHitsInput`<sup>Optional</sup> <a name="maxHitsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHitsInput"></a>

```typescript
public readonly maxHitsInput: number;
```

- *Type:* number

---

##### `maxObjectDepthInput`<sup>Optional</sup> <a name="maxObjectDepthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepthInput"></a>

```typescript
public readonly maxObjectDepthInput: number;
```

- *Type:* number

---

##### `maxStackFramesInput`<sup>Optional</sup> <a name="maxStackFramesInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFramesInput"></a>

```typescript
public readonly maxStackFramesInput: number;
```

- *Type:* number

---

##### `maxStackTraceSizeInput`<sup>Optional</sup> <a name="maxStackTraceSizeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSizeInput"></a>

```typescript
public readonly maxStackTraceSizeInput: number;
```

- *Type:* number

---

##### `maxStringLengthInput`<sup>Optional</sup> <a name="maxStringLengthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLengthInput"></a>

```typescript
public readonly maxStringLengthInput: number;
```

- *Type:* number

---

##### `maxCollectionDepth`<sup>Required</sup> <a name="maxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth"></a>

```typescript
public readonly maxCollectionDepth: number;
```

- *Type:* number

---

##### `maxCollectionWidth`<sup>Required</sup> <a name="maxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth"></a>

```typescript
public readonly maxCollectionWidth: number;
```

- *Type:* number

---

##### `maxFieldsPerObject`<sup>Required</sup> <a name="maxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject"></a>

```typescript
public readonly maxFieldsPerObject: number;
```

- *Type:* number

---

##### `maxHits`<sup>Required</sup> <a name="maxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits"></a>

```typescript
public readonly maxHits: number;
```

- *Type:* number

---

##### `maxObjectDepth`<sup>Required</sup> <a name="maxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth"></a>

```typescript
public readonly maxObjectDepth: number;
```

- *Type:* number

---

##### `maxStackFrames`<sup>Required</sup> <a name="maxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames"></a>

```typescript
public readonly maxStackFrames: number;
```

- *Type:* number

---

##### `maxStackTraceSize`<sup>Required</sup> <a name="maxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize"></a>

```typescript
public readonly maxStackTraceSize: number;
```

- *Type:* number

---

##### `maxStringLength`<sup>Required</sup> <a name="maxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength"></a>

```typescript
public readonly maxStringLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---


### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits">putCaptureLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureArguments">resetCaptureArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureLocals">resetCaptureLocals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureReturn">resetCaptureReturn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureStackTrace">resetCaptureStackTrace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaptureLimits` <a name="putCaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits"></a>

```typescript
public putCaptureLimits(value: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---

##### `resetCaptureArguments` <a name="resetCaptureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureArguments"></a>

```typescript
public resetCaptureArguments(): void
```

##### `resetCaptureLocals` <a name="resetCaptureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureLocals"></a>

```typescript
public resetCaptureLocals(): void
```

##### `resetCaptureReturn` <a name="resetCaptureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureReturn"></a>

```typescript
public resetCaptureReturn(): void
```

##### `resetCaptureStackTrace` <a name="resetCaptureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureStackTrace"></a>

```typescript
public resetCaptureStackTrace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits">captureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArgumentsInput">captureArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimitsInput">captureLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocalsInput">captureLocalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturnInput">captureReturnInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTraceInput">captureStackTraceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments">captureArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals">captureLocals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn">captureReturn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace">captureStackTrace</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `captureLimits`<sup>Required</sup> <a name="captureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits"></a>

```typescript
public readonly captureLimits: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a>

---

##### `captureArgumentsInput`<sup>Optional</sup> <a name="captureArgumentsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArgumentsInput"></a>

```typescript
public readonly captureArgumentsInput: string[];
```

- *Type:* string[]

---

##### `captureLimitsInput`<sup>Optional</sup> <a name="captureLimitsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimitsInput"></a>

```typescript
public readonly captureLimitsInput: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---

##### `captureLocalsInput`<sup>Optional</sup> <a name="captureLocalsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocalsInput"></a>

```typescript
public readonly captureLocalsInput: string[];
```

- *Type:* string[]

---

##### `captureReturnInput`<sup>Optional</sup> <a name="captureReturnInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturnInput"></a>

```typescript
public readonly captureReturnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `captureStackTraceInput`<sup>Optional</sup> <a name="captureStackTraceInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTraceInput"></a>

```typescript
public readonly captureStackTraceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `captureArguments`<sup>Required</sup> <a name="captureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments"></a>

```typescript
public readonly captureArguments: string[];
```

- *Type:* string[]

---

##### `captureLocals`<sup>Required</sup> <a name="captureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals"></a>

```typescript
public readonly captureLocals: string[];
```

- *Type:* string[]

---

##### `captureReturn`<sup>Required</sup> <a name="captureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn"></a>

```typescript
public readonly captureReturn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `captureStackTrace`<sup>Required</sup> <a name="captureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace"></a>

```typescript
public readonly captureStackTrace: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


### ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture">putCodeCapture</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeCapture` <a name="putCodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture"></a>

```typescript
public putCodeCapture(value: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture">codeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCaptureInput">codeCaptureInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeCapture`<sup>Required</sup> <a name="codeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture"></a>

```typescript
public readonly codeCapture: ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a>

---

##### `codeCaptureInput`<sup>Optional</sup> <a name="codeCaptureInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCaptureInput"></a>

```typescript
public readonly codeCaptureInput: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationsignalsInstrumentationConfigCaptureConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---


### ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference <a name="ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetClassName">resetClassName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetCodeUnit">resetCodeUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetLineNumber">resetLineNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetMethodName">resetMethodName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassName` <a name="resetClassName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetClassName"></a>

```typescript
public resetClassName(): void
```

##### `resetCodeUnit` <a name="resetCodeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetCodeUnit"></a>

```typescript
public resetCodeUnit(): void
```

##### `resetLineNumber` <a name="resetLineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetLineNumber"></a>

```typescript
public resetLineNumber(): void
```

##### `resetMethodName` <a name="resetMethodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetMethodName"></a>

```typescript
public resetMethodName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.classNameInput">classNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnitInput">codeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePathInput">filePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumberInput">lineNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodNameInput">methodNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className">className</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit">codeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber">lineNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName">methodName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classNameInput`<sup>Optional</sup> <a name="classNameInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.classNameInput"></a>

```typescript
public readonly classNameInput: string;
```

- *Type:* string

---

##### `codeUnitInput`<sup>Optional</sup> <a name="codeUnitInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnitInput"></a>

```typescript
public readonly codeUnitInput: string;
```

- *Type:* string

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePathInput"></a>

```typescript
public readonly filePathInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `lineNumberInput`<sup>Optional</sup> <a name="lineNumberInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumberInput"></a>

```typescript
public readonly lineNumberInput: number;
```

- *Type:* number

---

##### `methodNameInput`<sup>Optional</sup> <a name="methodNameInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodNameInput"></a>

```typescript
public readonly methodNameInput: string;
```

- *Type:* string

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className"></a>

```typescript
public readonly className: string;
```

- *Type:* string

---

##### `codeUnit`<sup>Required</sup> <a name="codeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit"></a>

```typescript
public readonly codeUnit: string;
```

- *Type:* string

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `lineNumber`<sup>Required</sup> <a name="lineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber"></a>

```typescript
public readonly lineNumber: number;
```

- *Type:* number

---

##### `methodName`<sup>Required</sup> <a name="methodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName"></a>

```typescript
public readonly methodName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationsignalsInstrumentationConfigLocationCodeLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


### ApplicationsignalsInstrumentationConfigLocationOutputReference <a name="ApplicationsignalsInstrumentationConfigLocationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation">putCodeLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeLocation` <a name="putCodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation"></a>

```typescript
public putCodeLocation(value: ApplicationsignalsInstrumentationConfigLocationCodeLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation">codeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocationInput">codeLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeLocation`<sup>Required</sup> <a name="codeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation"></a>

```typescript
public readonly codeLocation: ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a>

---

##### `codeLocationInput`<sup>Optional</sup> <a name="codeLocationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocationInput"></a>

```typescript
public readonly codeLocationInput: IResolvable | ApplicationsignalsInstrumentationConfigLocationCodeLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationsignalsInstrumentationConfigLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---


### ApplicationsignalsInstrumentationConfigTagsList <a name="ApplicationsignalsInstrumentationConfigTagsList" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get"></a>

```typescript
public get(index: number): ApplicationsignalsInstrumentationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationsignalsInstrumentationConfigTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]

---


### ApplicationsignalsInstrumentationConfigTagsOutputReference <a name="ApplicationsignalsInstrumentationConfigTagsOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer"></a>

```typescript
import { applicationsignalsInstrumentationConfig } from '@cdktn/provider-awscc'

new applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApplicationsignalsInstrumentationConfigTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>

---



